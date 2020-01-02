import { createSelector } from 'reselect';

// what it takes is actually two arguments.
// The first argument is a collection so an array of input selectors.
// So we're gonna say select cart and then the second argument is going to be a function that will return
// the value we want out of the selector.
// And what we're going to get in its parameters is actually each output of the input selectors in the
// array but in the order that those selectors were written.

// potrzeba dwóch argumentów.
// Pierwszym argumentem jest kolekcja, ***[selectCart]*** więc tablica selektorów wejściowych.
// Powiemy więc wybierz koszyk, a następnie
///drugim argumentem będzie funkcja ()=>{} , która powróci
// wartość, którą chcemy z selektora.
// I to, co otrzymamy w jego parametrach, to właściwie każde wyjście selektorów wejściowych w
// tablica, ale w kolejności, w jakiej selektory zostały zapisane.

//cart-dropdown
const selectCart = state => state.cart;
export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

//header.component
export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
);

//cart-icon
export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(zsumowanaIloscWKoszyku, cartItem) =>
				zsumowanaIloscWKoszyku + cartItem.quantity,
			0
		)
);

export const selectCartTotalPrice= createSelector(
	[selectCartItems],
	cartItems =>cartItems.reduce(
		(zsumowanaCenaWKoszyku, cartItem) =>
			zsumowanaCenaWKoszyku + cartItem.quantity * cartItem.price,
		0
	)
);

// export const selectCartTotal = createSelector(
//   [selectCartItems],
//   cartItems =>
//     cartItems.reduce(
//       (accumalatedQuantity, cartItem) =>
//         accumalatedQuantity + cartItem.quantity * cartItem.price,
//       0
//     )
// );