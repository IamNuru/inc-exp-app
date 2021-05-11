import React, { useState, useContext, useEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import StoreContext from '../context/stores/StoreContext';

const mySwal = withReactContent(Swal)

const AddStore = () => {
	const storeContext = useContext(StoreContext);
	const { addStore, updateStore, current , clearCurrent} = storeContext;

	const [Store, setStore] = useState({
	    storeName: '',
	    description: '',

	})

	useEffect(() => {
	    if (current !== null) {
	        setStore(current)
	    } else {
	        setStore({
	            storeName: '',
	            description: '',
	        })
	    }
	}, [storeContext, current])

	const { storeName,  description } = Store;

	const onChange = e => setStore({ ...Store, [e.target.name]: e.target.value })

	const onSubmit = (e) => {
		e.preventDefault();
		    const Toast = mySwal.mixin({
		        toast: true,
		        position: 'top',
		        showConfirmButton: false,
		        timer: 1500,
		        timerProgressBar: true,
		        didOpen: (toast) => {
		            toast.addEventListener('mouseenter', Swal.stopTimer)
		            toast.addEventListener('mouseleave', Swal.resumeTimer)
		        }
		    })
		if (current === null) {
		        addStore(Store)
		    Toast.fire({
		            icon: 'success',
		            title: 'New Store successfully Added'
		        })
		    clearForm()
		    } else {
		        updateStore(Store)
		    Toast.fire({
		            icon: 'success',
		            title: 'Store Succesfully Updated'
		        })
		    clearForm()
		    }
		}
		// Clear the form
		const clearForm = () => {
		    clearCurrent()
		    setStore({
				storeName: '',
	            description: '',
		        })
	};
	return (
		<div className="block shadow-md bg-pink-100 p-4">
			<h2 className="text-center underline mb-4 subpixel-antialiased text-lg font-serif font-semibold">
				Add New Store
			</h2>
			<form onSubmit={onSubmit} className="block">
				<div className="block mt-1">
					<div className="block">
						<label className="ml-0">Name : </label>
						<input
							type="text"
							name="storeName"
							placeholder="Enter Store name"
							id="name"
							className=" ml-auto h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full
                            shadow-md sm:text-sm px-1 border-gray-300 mr-1"
							required
							value={storeName}
							onChange={onChange}
						/>
					</div>
					<div className="block mt-4">
						<label className="ml-auto">description : </label>
						<textarea
							name="description"
							placeholder="Describe the purpose of this store"
							className="h-24 ml-auto focus:ring-indigo-500 focus:border-indigo-500 block w-full
                            shadow-md sm:text-sm px-1 border-gray-300 mr-1"
							required
							value={description}
							onChange={onChange}
						/>
					</div>
					<div className="mt-2 ml-auto w-full text-right mr-4">
						<button
							className="w-24 bg-blue-500 hover:bg-blue-700 text-white font-bold 
                        py-2 px-4 rounded"
						>
							{/* {
                            current === null ? 'Add' : 'Update'
                        } */}
							Add
						</button>
					</div>
				</div>
			</form>
			{/* {
                current && <div>
                    <button
                        className="mt-2 mb-2 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 
                        px-4 w-full"
                        onClick={clearForm}
                    >
                        Clear
                    </button>
                </div>
            } */}
		</div>
	);
};

export default AddStore;
