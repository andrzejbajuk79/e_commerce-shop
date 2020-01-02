import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				Shop
			</Link>
			<Link className="option" to="/shop">
				Contact Us
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					Sign Out
				</div>
			) : (
				<Link className="option" to="/signing">
					Sign In
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);
//dostajem STATE obiekt
const mapStateToProps = ({user:{currentUser},cart:{hidden}})=> ({
// const mapStateToProps = state => ({
	// currentUser: state.user.currentUser,
	currentUser,
	hidden
});
// so we're saying we want the root reducer right.
// We want the user value and then which will give us our user reducer.
// And then from there we want the current user value and by doing this and passing maps sets of props

// jako pierwszy argument chcemy pobrac aktualny STATE
// what is it that we pass as the first argument of Kinect.
// It's going to be the function that allows us to access the states with the state being are reducer our


// we now have to actually update our app component so that it's able to update the reducer value with
// the new set. idziemy do App

export default connect(mapStateToProps)(Header);
