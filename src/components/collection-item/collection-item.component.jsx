import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

// const CollectionItem = ({id,name,price,imageUrl,addItem}) => (
const CollectionItem = ({ item, addItem }) => {
	const {  name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>Add to card</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

// tworzymy nowa tabeke wolajac funkcej addItem
// because we're not actually taking  any map state to props that we pass 
//null as the first value and then we pass our map dispatch to props

export default connect(null, mapDispatchToProps)(CollectionItem);
