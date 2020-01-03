import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.components';


// because inside of our app J.S.  jest  umieszczona < ROUTE>
// automatycznie zostaje przekazane 3 elementy : MATCH,LOCATION,HISTORY
//  my potrzebujemy MATCH zeby pobrac z niej PATH i przekierowac
const ShopPage = ({ match, location, history }) => {
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:category`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage;
