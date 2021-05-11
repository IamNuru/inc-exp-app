import React, { useReducer } from "react";
import axios from "axios";
import StoreContext from "./StoreContext";
import StoreReducer from "./StoreReducer";

import {
	ADD_STORE,
	DELETE_STORE,
	UPDATE_STORE,
	FILTER_STORES,
	CLEAR_FILTER,
	// GET_STORE,
	GET_STORES,
	SET_CURRENT,
	SET_DETAIL,
	CLEAR_CURRENT,
	SET_SELECTED_STORE,
} from "../../types";

const StoreState = (props) => {
	//set Initial state
	const initialState = {
		Stores: [],
		Store: {},
		current: null,
		detail:null,
		error: null,
		filtered: null,
		storeSelected:false,
		selectedStoreId:null,
	};

	const [state, dispatch] = useReducer(StoreReducer, initialState);

	//actions
	//get Stores
	const getStores = async () => {
		try {
			const res = await axios.get("http://localhost:8000/api/stores");
			dispatch({
				type: GET_STORES,
				payload: res.data,
			});
		} catch (err) {}
	};
	//add STORE
	const addStore = async (store) => {
		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};
		try {
			await axios.post(
				"http://localhost:8000/api/stores",
				store,
				config
			);

			dispatch({
				type: ADD_STORE,
				payload: store,
			});
		} catch (err) {}
	};
	//delete Store
	const deleteStore = async (id) => {
		try {
			await axios.delete(`http://localhost:8000/api/stores/${id}`);

			dispatch({
				type: DELETE_STORE,
				payload: id,
			});
		} catch (err) {}
	};
	//get STORE
	//update STORE
	const updateStore = async (Store) => {
		const config = {
			header: {
				"Content-Type": "application/json",
			},
		};
		try {
			await axios.put(
				`http://localhost:8000/api/items/${Store.id}`,
				Store,
				config
			);

			dispatch({
				type: UPDATE_STORE,
				payload: Store,
			});
		} catch (err) {}
	};
	//filter STOREs
	const filterStores = (text) => {
		dispatch({
			type: FILTER_STORES,
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
	const setCurrent = (Store) => {
		dispatch({
			type: SET_CURRENT,
			payload: Store,
		});
	};
	//set store detail
	const setDetail = (Store) => {
		dispatch({
			type: SET_DETAIL,
			payload: Store,
		});
	};
	//set selected store
	const setSelectedStore = (store) => {
		dispatch({
			type: SET_SELECTED_STORE,
			payload: store,
		});
	};
	//clear current
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT,
		});
	};

	return (
		<StoreContext.Provider
			value={{
				stores: state.Stores,
				current: state.current,
				detail: state.detail,
				totalIncome: state.totalIncome,
				getStore: state.Store,
				filtered: state.filtered,
				storeSelected:state.storeSelected,
				selectedStoreId:state.selectedStoreId,
				filterStores,
				addStore,
				deleteStore,
				setCurrent,
				setDetail,
				clearCurrent,
				updateStore,
				clearFilter,
				getStores,
				setSelectedStore,
				// deleteStore,
			}}
		>
			{props.children}
		</StoreContext.Provider>
	);
};

export default StoreState;
