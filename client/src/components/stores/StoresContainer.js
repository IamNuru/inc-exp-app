import React from "react";
import AddStore from "./AddStore";
import ListStores from "./ListStores";
import StoreDetails from "./StoreDetails";

const StoresContainer = () => {
	return (
		<div className="m-auto mt-2 block md:grid md:grid-cols-3 sm:grid-cols-1 gap-2 md:w-10/12  sm:w-9/12">
			<div className="block md:col-span-2">
				<div className="min-h-20 bg-purple-400 mb-4">
					<AddStore />
				</div>
				<div className="min-h-20 p-4">
					<ListStores />
				</div>
			</div>
			<div className="min-h-2 sm:w-full bg-pink-100 sm:mt-4 md:mt-0 p-8">
				<StoreDetails />
			</div>
		</div>
	);
};

export default StoresContainer;
