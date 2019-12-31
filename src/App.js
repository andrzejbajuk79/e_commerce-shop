import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Loging from './pages/loging/loging.component';
import Header from './components/header/header.component.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}
	unsubscribeFromAuth = null;
	//chcemy posiadac wiedze czy ktos juz jest zalogowany czy nie
	componentWillMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}
	//to zamyka nasz subskrybje na konkretny email adres
	componentWillUnmount(){
  this.unsubscribeFromAuth()
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signing" component={Loging} />
				</Switch>
			</div>
		);
	}
}

export default App;
