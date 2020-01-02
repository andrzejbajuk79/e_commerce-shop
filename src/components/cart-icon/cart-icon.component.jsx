import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopIcon.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);
//pierwszy raz pobiera i wysyla to reducert
// chcemy pobrac liste ietmeow w koszyku i wyswietlic ja na ikonie
// do tego potrzebujem mapStateToProps
//..czyli pobranie State i iumieszcznie w propsie komponentu
// const CartIcon = ({toggleCartHidden, itemCount })

//root-reducer stad pobieram cart
//pobier ze store STATE i wkloda do propsa

//sprawdzamy czy CartItem sie zmienil
const mapStateToProps1 = ({ cart: { cartItems } }) => {
	console.log('zostalem zawolany'); //nieotrzebnie?? generuje rerender
	return {
		itemCount: cartItems.reduce(
			(zsumowanaIlosc, cartItem) => zsumowanaIlosc + cartItem.quantity,
			0
		)
}};

// 	po zainstalowaniu bibliotek RESELECT poprzez yarn
// 	przekazujem caly state nie jak poprzednio
const mapStateToProps2 = (state) => 	({
	itemCount: selectCartItemsCount(state)
})

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
})

	
//wysyla do store informacje ktoru generuje nowy STATE, obsluge zliczania
//itemow rzenosimy do osobnego pliku cart.selector.js dlatego dodajemy
//bibliotek RESELECT poprzez yarn
const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
