import React, { useReducer } from "react";
import uuid from 'react-uuid';
import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer'

import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    FILTER_PRODUCTS,
    CLEAR_FILTER,
    GET_PRODUCT,
    GET_PRODUCTS,
    SET_CURRENT,
    CLEAR_CURRENT,
} from "../types";
 

const ProductState = (props) => {
    //set Initial state
    const initialState = {
        products: [
            {
                id: 1,
                type: 'inc',
                description: 'Capital',
                amount:25000
            },
            {
                id: 2,
                type: 'exp',
                description: 'Bought books',
                amount:2500
            },
            {
                id: 3,
                type: 'exp',
                description: 'Bought chocolate',
                amount:1400
            },
            {
                id: 4,
                type: 'inc',
                description: 'sold books',
                amount:3000
            }
        ],
        product: {},
        current:null,
		error: null,
		filtered: null,
    };

    const [state, dispatch] = useReducer(ProductReducer, initialState)
    
    //actions
    //get products
    //add product
    const addProduct = product => {
        product.id = uuid();
        dispatch({
            type: ADD_PRODUCT,
            payload: product
        })
    }
    //delete product
    const deleteProduct = id => {
        dispatch({
            type: DELETE_PRODUCT,
            payload: id
        })
    }
    //get product
    //update product
    const updateProduct = product => {
        dispatch({
            type: UPDATE_PRODUCT,
            payload: product
        })
    }
    //filter products
    const filterProducts = text => {
        dispatch({
            type: FILTER_PRODUCTS,
            payload: text
        })
    }
    //clear filter
    const clearFilter = () => {
        dispatch({
            type: CLEAR_FILTER,
        })
    }
    //set current
    const setCurrent = product => {
        dispatch({
            type: SET_CURRENT,
            payload: product
        })
    }
    //clear current
    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT
        })
    }
    
    
    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                current: state.current,
                // getProduct: state.product,
                filtered: state.filtered,
                filterProducts,
                addProduct,
                deleteProduct,
                setCurrent,
                clearCurrent,
                updateProduct,
                clearFilter,
                // deleteProduct,
            }}
            >
                {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;
