import React, { useContext,  useEffect } from "react";
import Store from "./Store";
import StoreContext from "../context/stores/StoreContext";

const ListStores = () => {

	const storeContext = useContext(StoreContext);
	const {
		stores,
		// filtered,
		// filterstores,
		// clearFilter,
		getStores,
	} = storeContext;
	// const text = useRef("");
	useEffect(() => {
		getStores();
		// if (filtered === null) {
		// 	text.current.value = "";
		// }
		//eslint-disabled-next-line
	}, []);

	// const onChange = (e) => {
	// 	if (text.current.value !== "") {
	// 		filterstores(e.target.value);
	// 	} else {
	// 		clearFilter();
	// 	}
	// };
	return (
		<div className="w-full">
			<h2 className="text-center underline mb-2 subpixel-antialiased text-lg font-serif font-semibold">
				List of Stores
			</h2>
			<table className="table-auto w-full md:w-10/12 m-auto">
				<thead>
					<tr>
						<th className="text-left">Name</th>
						<th className="text-right">Action</th>
					</tr>
				</thead>
				<tbody>
					{
						stores.map((store, index) =>{
							return <Store key={index} store={store}/>
						
						})
					}
				</tbody>
			</table>
		</div>
	);
};

export default ListStores;
