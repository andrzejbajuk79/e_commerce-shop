import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

 import { select4ItemsFromCollections } from '../../redux/shop/shop.selector';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

//strona na ktorej widzimu szystkie kategoreie i pierwsze 4 elementy z kazdej kategorii
// const CollectionPreview = ({title,items}) => (
const CollectionPreview = ({ title,items}) => {
  //  const {title,items} = collections
	return (
		<div className="collection-preview">
			<h1 className="title"> {title.toUpperCase()} </h1>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};
// const mapStateToProps = createStructuredSelector({
// 	collections: select4ItemsFromCollections
// });
// export default connect(mapStateToProps)(CollectionPreview);

 export default CollectionPreview;
//obecnie
