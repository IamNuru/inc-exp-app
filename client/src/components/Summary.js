import React, { useContext } from 'react'
import ProductContext from "./context/products/ProductContext";


const Summary = () => {
    const productContext = useContext(ProductContext);
    const { products } = productContext;
  
    return (
        <div className="mt-2 shadow-lg bg-white rounded-lg p-4">
            <h2 className="underline w-full text-center">
                SUMMARY
            </h2>
            <table className="table-auto w-full">
                <thead>
                    <tr className="text-left">
                        <th>Incomes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-purple-200 bb-4' >
                        <td className="px-4">TOTAL</td>
                        <td>{products.length > 0 ? products
                            .filter(item => item.type === 'inc')
                            .map(item => item.amount)
                            .reduce((prev, next) => parseInt(prev) + parseInt(next), 0): 0}
                        </td>
                    </tr>
                    <tr className='bg-purple-200'>
                        <td className="px-4">ITEMS</td>
                        <td>{products.length > 0 ? products
                            .filter(item => {
                            return( item.type === 'inc')
                            }
                                ).length : 0}
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table-auto w-full">
                <thead>
                    <tr className="text-left">
                        <th>Expenses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-purple-200 bb-4' >
                        <td className="px-4">TOTAL</td>
                        <td>{products.length > 0 ? products
                            .filter(item => item.type === 'exp')
                            .map(item => item.amount)
                            .reduce((prev, next) => parseInt(prev) + parseInt(next), 0): 0}
                        </td>
                    </tr>
                    <tr className='bg-purple-200'>
                        <td className="px-4">ITEMS</td>
                        <td>{products.length > 0 ? products
                            .filter(item => {
                            return( item.type === 'exp')
                            }
                                ).length : 0}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Summary

