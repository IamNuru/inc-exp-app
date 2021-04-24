import {
	GET_PRODUCTS,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	GET_PRODUCT,
	UPDATE_PRODUCT,
	FILTER_PRODUCTS,
	CLEAR_FILTER,
	PRODUCT_ERROR,
	SET_CURRENT,
	CLEAR_CURRENT
} from '../types';

const ProductReducer =  (state, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				PRODUCTs: action.payload,
			};
		case ADD_PRODUCT:
			return {
				...state,
				products: [...state.products, action.payload],
			};
		case UPDATE_PRODUCT:
			return {
				...state,
				products: 
					state.products.map(product => product.id === action.payload.id ? action.payload : product
					),
			};
		case DELETE_PRODUCT:
			return {
				...state,
				products: state.products.filter(
					(product) => product.id !== action.payload
				),
			};
		case GET_PRODUCT:
			return {
				...state,
				product: action.payload,
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};
		case FILTER_PRODUCTS:
			return {
				...state,
				filtered: state.products.filter((product) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return (
						product.description.match(regex) || product.amount.toString().match(regex)
					);
				}),
			};
		case PRODUCT_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};
		default:
			return state;
	}
};
export default ProductReducer;