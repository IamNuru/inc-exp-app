import React from 'react'

const Summary = () => {
    return (
        <div className="mt-4 shadow-sm rounded-md p-4">
            <h2 className="w-full text-center">
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
                        <td>850000</td>
                    </tr>
                    <tr className='bg-purple-200'>
                        <td className="px-4">ITEMS</td>
                        <td>64</td>
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
                    <tr>
                        <td className="px-4">TOTAL</td>
                        <td>850000</td>
                    </tr>
                    <tr>
                        <td className="px-4">ITEMS</td>
                        <td>64</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Summary

