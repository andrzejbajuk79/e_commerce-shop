import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selector';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.action.js';
import CustomButton from '../../components/custom-button/custom-button.component';

const CartDropdown = ({ cartItems, history, ...otherProps }) => {
	console.log(otherProps);

	return (
		<div className="cart-dropdown">
			<div className="cart-items ">
				{//opcjonalnie pokazujemy info jezeli koszyk jest pusty
				cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Twój koszyk jwest pusty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout')
					otherProps.dispatch(toggleCartHidden());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};
// in our cart dropdown we need to display it inside of this div
// but we need access to those cart
// items.
// So what we're gonna do is we're going to pull them off using
// connect off of our retail store
// poprzez  maps date to props
// equals are function where we get state and what  return
// is carte items which will go to state
// actually.

//w naszym koszyku musimy wyświetlić go wewnątrz tego div
// ale potrzebujemy dostępu do tych koszyków przedmiotów.
// Więc zamierzamy to zrobić, używając ich
// połącz się z naszym REDUCEREM poprzez mapowanie tabeli
// za pomoca funkcją, w której otrzymujemy stan i to co dostajemy z powrotem to
// to przedmioty z kart, które powedruja do STATE  tego componentu.

//bez uzucie RESELECT
const mapStateToProps1 = ({ cart: { cartItems } }) => ({
	cartItems
});
//z uzyciem RESELECT
const mapStateToProps2 = state => ({ cartItems: selectCartItems(state) });

//z uzyciem RESELECT oraz createStructuredSelector
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
