import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.styles.scss';
 import {selectCollectionsForPreview  } from '../../redux/shop/shop.selector';
import  CollectionPreview  from '../collection-preview/collection-preview.component';

//kontener do przegladu kolekcji
const CollectionOverview = ({ collections }) => (
	<div className="collections-overview">
		{collections.map(({ id, ...otherProps }) => (
			<CollectionPreview key={id}  {...otherProps} />
		))}

	</div>
);

//poniewaz zamienilismy shop data z tabeli na obiekt, tworzymy selektor
//ktory z powrotem stworzy nam tabele z kolekcja


const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview 
});
export default connect(mapStateToProps)(CollectionOverview);

// export default CollectionOverview;
