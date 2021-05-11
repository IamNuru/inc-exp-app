import React, { useContext } from "react";
import Swal from "sweetalert2";
import StoreContext from "../context/stores/StoreContext"
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

const Store = (props) => {
	const storeContext = useContext(StoreContext);

	const { deleteStore, setCurrent } = storeContext;
	const { id } = props.store;

	//delete a store
	const onDelete = (e) => {
		mySwal
			.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, delete item!",
			})
			.then((result) => {
				if (result.isConfirmed) {
					deleteStore(id);
					mySwal.fire("Deleted!", "The item has been deleted", "success");
					setCurrent('');
				}
			});
	};
	return (
		<tr className="border-t-2">
			<td>{props.store.storeName}</td>
			<td className="float-right">
				<ul className="flex ml-auto">
					<li className="px-1 text-purple-700 mouse-hover"
					onClick={() => setCurrent(props.store)}>
						<i className="fa fa-edit"></i>
					</li>
					<li className="px-1 text-pink-700 mouse-hover" onClick={onDelete}>
						<i className="fa fa-trash"></i>
					</li>
				</ul>
			</td>
		</tr>
	);
};

export default Store;
