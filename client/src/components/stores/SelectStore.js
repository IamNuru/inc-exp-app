import React, { useContext } from "react";
import StoreContext from "../context/stores/StoreContext";

const SelectStore = () => {

	const storeContext = useContext(StoreContext);
	const { stores, setDetail } = storeContext;

	return (
		<div>
			<select name="" className="w-full rounded-sm h-8">
				<option value="1">Store 1</option>
				{
					stores.map((store, index) =>{
						return <option value={store.id} key={index} onClick={() => setDetail(store)}>{store.storeName}</option>
					})
				}
			</select>
		</div>
	);
};

export default SelectStore;
