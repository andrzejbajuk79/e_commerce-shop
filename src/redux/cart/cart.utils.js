export const addItemToCart = (cartItems, cartItemToAdd) => {
	//what we are gonna do is we're going to
	//look inside of our existing cartItems - dziej sie w  COOLECTIONiTEM   to see if that cart
	//item already exists
	// Z REDUCERA POBIERAM 	cartItems: []

	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);
	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
// quantity  gets attacjed the first time around since this
//  if block won`t run when it`s a new item

// ilość dostaje się po raz pierwsz
// ponieważ blok nie uruchomi się, gdy będzie nowym
// przedmiotem

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
	}
	return cartItems.map(cartItem =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
