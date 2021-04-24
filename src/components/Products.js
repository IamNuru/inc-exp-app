import React  , {useContext , useRef, useEffect } from 'react';
import Product from './Product';
import ProductContext from './context/ProductContext';


const Products = () => {
    const productContext = useContext(ProductContext)
    const { products , filtered, filterProducts, clearFilter} = productContext;
    
    const text = useRef('')

    useEffect(() => {
        if (filtered === null) {
            text.current.value = ''
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
            filterProducts(e.target.value)
        } else {
            clearFilter()
        }
    }

    return (
        <div className="shadow-md p-4 h-full">
            <input
                type="text"
                name="description"
                placeholder="search"
                id="name"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full
            shadow-md sm:text-sm px-1 py-2 border-gray-300 text-md"
                ref={text}
                onChange={onChange}
            />
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="py-4">Type</th>
                        <th>Description</th>
                        <th className="text-center">Amount</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                        {filtered !== null ?
                            filtered.map((product, index) => (
                                    <Product key={index} product={product} />
                            ))
                            :
                            products.map((product, index) => (
                                    <Product key={index} product={product} />
                            ))
                        }
                </tbody>
            </table>
        </div>
    )
}

export default Products
