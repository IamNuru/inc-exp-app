import React, { useContext , useEffect} from "react";
import StoreContext from "./context/stores/StoreContext"

const SelectStore = () => {

	const storeContext = useContext(StoreContext);

	const { stores, getStores, setSelectedStore } = storeContext
	
	useEffect(() => {
		getStores();
		
		// eslint-disable-next-line
	}, [])


	return (
		<div className="max-w-lg m-auto mb-4">
			<select name="" className="w-full rounded-sm h-8 text-center">
				<option value="1">Choose Store</option>
				{
					stores.map((store, index) =>{
						return <option value={store.id} key={index} onClick={() => setSelectedStore(store)}>{store.storeName}</option>
					})
				}
			</select>
		</div>
	);
};

export default SelectStore;
