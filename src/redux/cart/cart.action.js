import { CartActionTypes } from './cart.types';


//paylod jest opcjonalnyi tutaj nie uzywamy go
export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
});
