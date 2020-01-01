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

export default connect(mapStateToProps)(Header);
