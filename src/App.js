import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Loging from './pages/loging/loging.component';
import Header from './components/header/header.component.jsx';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
	unsubscribeFromAuth = null;
	//chcemy posiadac wiedze czy ktos juz jest zalogowany czy nie
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			} else {
			setCurrentUser(userAuth);
			}
		});
	}
	//to zamyka nasz subskrybje na konkretny email adres
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				{/* <Header currentUser={this.state.currentUser} /> */}
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signing" component={Loging} />
				</Switch>
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
