import React, { useContext } from 'react'

import SelectStore from "./SelectStore";
import AddProduct from "./AddProduct";
import Summary from "./Summary";
import Products from "./Products";
import StoreContext from "./context/stores/StoreContext";

const HomePage = () => {

    const storeContext = useContext(StoreContext);
	const { storeSelected } = storeContext;

    return (
        <div className="">
            <SelectStore />	
            {
                storeSelected !== false ? 
                (
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 md:mx-60 gap-x-8">
                    <div>
                        <AddProduct />
                        <Summary />
                    </div>
                    <div>
                        <Products />
                    </div>
                </div>
                ) 
                : 
                (
                    <div className="text-center m-auto max-w-lg py-4 shadow-2xl rounded-sm md:rounded-lg">Please select a store</div>
                )
            }
            
        </div>
    )
}

export default HomePage
