import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
					{/* <Route path="/signing" component={Loging} /> */}
					<Route
						path="/signing"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <Loging />
						}
					/>
				</Switch>
			</div>
		);
	}
}
//APP component nie potrzebuje juz CurrentUser
//we're going to connect our app to the outcome of our initial connect call using the second argument
// of Kinect which is map dispatch the props now the first argument is map states props but our app doesn't
// actually need current user anymore because outside of passing it into our header it only sets it but
// it doesn't do anything with the current user value in its component itself.

// eraz pierwszym argumentem są rekwizyty stanów map, ale nasza aplikacja nie
// faktycznie potrzebuje już bieżącego użytkownika, ponieważ poza przekazaniem go do naszego nagłówka ustawia go, ale
// nie robi nic z bieżącą wartością użytkownika w samym składniku.



const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect( null,mapDispatchToProps)(App);
