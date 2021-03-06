import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectCartItems,
	selectCartTotalPrice
} from '../../redux/cart/cart.selector';
import './checkout.styles.scss';
import CheckoutItem  from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Produkt</span>
			</div>
			<div className="header-block">
				<span>Szczegóły</span>
			</div>
			<div className="header-block">
				<span>Ilość</span>
			</div>
			<div className="header-block">
				<span>Cena</span>
			</div>
			<div className="header-block">
				<span>Usuń</span>
			</div>
		</div>
    {
      cartItems.map(cartItem => (
			<CheckoutItem  key={cartItem.id} cartItem={cartItem}/>
			))
    }
    <div className='total'>
      <span>{total} PLN </span>
    </div>

	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total:selectCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
