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


// we want to get all the keys and the map over that array of keys so we get
//the value of our collections object at that key which will give us an array of items
// export const selectCollectionForPreview = createSelector(
//   [selectCollections], 
//   collections =>Object.key(collections).map(key=>collections[key])
// )
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);


//pierwsze 4 elementy z kolekcji
//  export const select4ItemsFromCollections = createSelector(
// 	[selectCollections],
// 	collections=> collections.filter((collections.id)=>collections.id<4)
//  )



//collectionpagePage pobieramy match.params.category np:hats
//pozniej mapujemy zapomoca COLLECTIONID_MAP
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections], 
    //shop data jako obiekt
    collection => collection[collectionUrlParam]
//shop data jako tabela
    // collections =>
		// collections.find(
    //   collection => collection.id === COLLECTIONID_MAP[collectionUrlParam]
    //   // collection => collection.2 === COLLECTIONID_MAP[sneakers] //2
		// )
	);
