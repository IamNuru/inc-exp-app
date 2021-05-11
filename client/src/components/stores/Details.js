import React, { useContext }from 'react';
import StoreContext from "../context/stores/StoreContext";

const Details = () => {
    const storeContext = useContext(StoreContext);
    const { detail } = storeContext;
    return (
        <div>
            {
                detail !== null ? (
                    <div>
                        <div className="store-name block">
                            <h4>Name</h4>
                            <p className="text-gray-800 px-4 py-1">{detail.storeName}</p>
                        </div>
                        <div className="store-description block">
                            <h4>Description</h4>
                            <p className="text-gray-600 px-4 py-2 text-sm">{detail.description}</p>
                        </div>
                    </div>
                ) 
                :
                (
                <div>
                    Choose a product to see the details
                </div>
                )            
            }
            
        </div>
    )
}

export default Details
