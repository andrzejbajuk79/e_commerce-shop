import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector}  from 'reselect'

import {selectCollection}  from '../../redux/shop/shop.selector.js'
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

// ta strona słuzy do wyswietlania poszczegolnych elemntow kolekcji
// w całosci np : KURKI, SPAODNIE,KAPELUSZE itede

const CollectionPage = ({match,history,location,collection }) => {
	//  console.log(collection);
	console.log(location);
	//dzieki match dostajemy cos takiego czyli path, category:hats
	//   {path: "/shop/:category", url: "/shop/hats", isExact: true, params: {…}}
	// path: "/shop/:category"
	// url: "/shop/hats"
	// isExact: true
	// params:
	// category: "hats"
	// __proto__: Object
	// __proto__: Object
	return (
		<div className="category">
			<h2>Category</h2>
		</div>
	);
};

//ownProps daje nam wszystkie dodatkowe oarametru jakie dostaje komponent 
//collection z SHOP component w ktorym, jest w <Route></Route>
// i automatycznie doste 3 elementy : MATCH,LOCATION,HISTORY
//my uzywamy match.params.category w ktorum jhest nazwa kliknietejehj kategorii
//cala reszta dzieje sie w selektorZe ktory mapuje cala kolekcje 
const mapStateToProps = (state,ownProps)=>({
	collection: selectCollection(ownProps.match.params.category)(state),
	
});
export default connect(mapStateToProps)(CollectionPage);
