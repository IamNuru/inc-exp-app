import React, { useState , useContext, useEffect} from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import ProductContext from './context/products/ProductContext'
import StoreContext from './context/stores/StoreContext'


const mySwal = withReactContent(Swal)

const AddProduct = () => {
    const productContext = useContext(ProductContext);
    const storeContext = useContext(StoreContext);

    const { selectedStoreId } = storeContext;
    const { addProduct, updateProduct, current , clearCurrent} = productContext;

    const [product, setProduct] = useState({
        type: 'inc',
        description: '',
        amount: 0,
        
    })

    useEffect(() => {
        if (current !== null) {
            setProduct(current)
        } else {
            setProduct({
                type: 'inc',
                description: '',
                amount:0
            })
        }
    }, [productContext, current])
    
    const { type, description, amount } = product;

    const onChange = e => setProduct({ ...product, [e.target.name]: e.target.value })

    const onSubmit = e => {
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
                addProduct(product, selectedStoreId)
            Toast.fire({
                    icon: 'success',
                    title: 'New Product successfully Added'
                })
            clearForm()
            } else {
                updateProduct(product)
            Toast.fire({
                    icon: 'success',
                    title: 'Product Succesfully Updated'
                })
            clearForm()
            }
    }

    //Clear the form
    const clearForm = () => {
        clearCurrent()
        setProduct({
                type: 'inc',
                description: '',
                amount:0
            })

    }
    return (
        <div className="block shadow-md bg-pink-200 p-4">
            <form onSubmit={onSubmit} className="block">
                <div className="flex w-1/2 m-auto justify-between align-middle">
                <label>
                    <input
                        type="radio" 
                        name="type"
                        value='inc'
                        checked={type === 'inc'}
                        onChange={onChange}
                    />
                    {' '}Income
                </label>
                <label>
                    <input
                        type="radio" 
                        name="type"
                        value='exp'
                        checked={type === 'exp'}
                        onChange={onChange}
                    />
                    {' '}Expense
                </label>
            </div>
            <div className="flex mt-1">
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Enter product name" 
                    id="name" 
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-9/12 
                    shadow-md sm:text-sm px-1 border-gray-300 rounded-md mr-1"
                        required
                    value={description}
                    onChange={onChange}
                    />
                <input
                    type="number"
                    name="amount" 
                    id="amount" 
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-3/12 
                    shadow-sm sm:text-md px-1 border-gray-800 rounded-md mr-1"
                        required
                    value={amount}
                    onChange={onChange}
                    />
                    
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                        py-2 px-4 rounded">
                        {
                            current === null ? 'Add' : 'Update'
                        }
                </button>
                </div>
                
            </form>
            {
                current && <div>
                    <button
                        className="mt-2 mb-2 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 
                        px-4 w-full"
                        onClick={clearForm}
                    >
                        Clear
                    </button>
                </div>
            }
        </div>
    )
}

export default AddProduct
