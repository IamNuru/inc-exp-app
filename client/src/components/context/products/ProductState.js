import React, { useReducer } from "react";
import axios from "axios";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

import {
	ADD_PRODUCT,
	DELETE_PRODUCT,
	UPDATE_PRODUCT,
	FILTER_PRODUCTS,
	CLEAR_FILTER,
	// GET_PRODUCT,
	GET_PRODUCTS,
	SET_CURRENT,
	CLEAR_CURRENT,
} from "../../types";

const ProductState = (props) => {
	//set Initial state
	const initialState = {
		products: [],
		product: {},
		current: null,
		error: null,
		filtered: null,
		totalIncomes: 0,
		totalExpenses: 0,
	};

	const [state, dispatch] = useReducer(ProductReducer, initialState);

	//actions
	//get products
	const getProducts = async (id) => {
		try {
			const res = await axios.get(`http://localhost:8000/api/items/${id}`);
			dispatch({
				type: GET_PRODUCTS,
				payload: res.data,
			});
		} catch (err) {}
	};
	//add product
	const addProduct = async (product, storeid) => {
		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};
		try {
			await axios.post(
				`http://localhost:8000/api/items/${storeid}/store`,
				product,
				config
			);

			dispatch({
				type: ADD_PRODUCT,
				payload: product,
			});
		} catch (err) {}
	};
	//delete product
	const deleteProduct = async (id) => {
		try {
			await axios.delete(`http://localhost:8000/api/items/${id}`);

			dispatch({
				type: DELETE_PRODUCT,
				payload: id,
			});
		} catch (err) {}
	};
	//get product
	//update product
	const updateProduct = async (product) => {
		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};
		try {
			await axios.put(
				`http://localhost:8000/api/items/${product.id}`,
				product,
				config
			);

			dispatch({
				type: UPDATE_PRODUCT,
				payload: product,
			});
		} catch (err) {}
	};
	//filter products
	const filterProducts = (text) => {
		dispatch({
			type: FILTER_PRODUCTS,
			payload: text,
		});
	};
	//clear filter
	const clearFilter = () => {
		dispatch({
			type: CLEAR_FILTER,
		});
	};
	//set current
	const setCurrent = (product) => {
		dispatch({
			type: SET_CURRENT,
			payload: product,
		});
	};
	//clear current
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT,
		});
	};

	return (
		<ProductContext.Provider
			value={{
				products: state.products,
				current: state.current,
				totalIncome: state.totalIncome,
				// getProduct: state.product,
				filtered: state.filtered,
				storeSelected: state.storeSelected,
				selectedStoreId: state.selectedStoreId,
				filterProducts,
				addProduct,
				deleteProduct,
				setCurrent,
				clearCurrent,
				updateProduct,
				clearFilter,
				getProducts,
				// deleteProduct,
			}}
		>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductState;
