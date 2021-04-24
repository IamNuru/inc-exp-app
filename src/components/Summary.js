import React, { useContext } from 'react'
import ProductContext from '../components/context/ProductContext';

const Summary = () => {
    const productContext = useContext(ProductContext);
    const { totalIncomes,totalIncomesCount, totalExpenses,totalExpensesCount } = productContext;
  
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
                        <td>{totalIncomes}</td>
                    </tr>
                    <tr className='bg-purple-200'>
                        <td className="px-4">ITEMS</td>
                        <td>{totalIncomesCount}</td>
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
                        <td>{totalExpenses}</td>
                    </tr>
                    <tr className='bg-purple-200'>
                        <td className="px-4">ITEMS</td>
                        <td>{totalExpensesCount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Summary

