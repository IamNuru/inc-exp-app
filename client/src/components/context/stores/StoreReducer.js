import {
	GET_STORES,
	ADD_STORE,
	DELETE_STORE,
	GET_STORE,
	UPDATE_STORE,
	FILTER_STORES,
	CLEAR_FILTER,
	STORE_ERROR,
	SET_CURRENT,
	SET_DETAIL,
	CLEAR_CURRENT,
	SET_SELECTED_STORE,
} from "../../types";

const StoreReducer = (state, action) => {
	switch (action.type) {
		case GET_STORES:
			return {
				...state,
				Stores: action.payload,
			};
		case ADD_STORE:
			return {
				...state,
				Stores: [...state.Stores, action.payload],
			};
		case UPDATE_STORE:
			return {
				...state,
				Stores: state.Stores.map((Store) =>
					Store.id === action.payload.id ? action.payload : Store
				),
			};
		case DELETE_STORE:
			return {
				...state,
				Stores: state.Stores.filter((Store) => Store.id !== action.payload),
			};
		case GET_STORE:
			return {
				...state,
				Store: action.payload,
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case SET_DETAIL:
			return {
				...state,
				detail: action.payload,
				selectedStoreId: action.payload.id
			};
		case SET_SELECTED_STORE:
			return {
				...state,
				storeSelected: true,
				selectedStoreId: action.payload.id
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case FILTER_STORES:
			return {
				...state,
				filtered: state.Stores.filter((Store) => {
					const regex = new RegExp(`${action.payload}`, "gi");
					return (
						Store.description.match(regex) ||
						Store.amount.toString().match(regex)
					);
				}),
			};
		case STORE_ERROR:
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
export default StoreReducer;
