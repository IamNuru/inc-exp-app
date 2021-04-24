import React, { useContext } from 'react';
import ProductContext from './context/ProductContext'

const Header = () => {
    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GHS',
    });

    const productContext = useContext(ProductContext)
    const { totalIncomes, totalExpenses} = productContext

    return (
        <div className="p-4 text-xl h-24 bg-gradient-to-r from-green-400 to-blue-500 text-center align-middle">
            Balance: {
                totalExpenses > totalIncomes ?
                    (<span className='bg-white py-2 px-4 text-pink-600 text-2xl'>
                        {formatter.format(totalIncomes - totalExpenses)}
                    </span>)
                    :
                    (<span className='bg-white py-2 px-4 text-purple-600 text-2xl'>
                        {formatter.format(totalIncomes - totalExpenses)}
                    </span>)
            }
        </div>
    )
}

export default Header
