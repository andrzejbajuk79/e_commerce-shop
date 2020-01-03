import { createSelector } from 'reselect';
const COLLECTIONID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5
};
const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);
//collectionpagePage pobieramy match.params.category np:hats
//pozniej mapujemy zapomoca COLLECTIONID_MAP
export const selectCollection = collectionUrlParam =>
	createSelector([selectCollections], collections =>
		collections.find(
			collection => collection.id === COLLECTIONID_MAP[collectionUrlParam]
		)
	);
