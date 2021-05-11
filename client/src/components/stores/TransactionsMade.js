import React, { useContext }from 'react';
import StoreContext from "../context/stores/StoreContext";

const TransactionsMade = () => {
	
	const storeContext = useContext(StoreContext);
    const { detail } = storeContext;
	return (
		<div>
			{
				detail !== null &&
				<div>
					<h4 className="w-full text-center">Transactions</h4>
					{
						detail.items.length > 0  ? (
						detail.items.map((item, index) =>{
							return <div>
								<div className="flex bg-pink-100 border-1 shadow-lg mb-2 px-1 py-2">
									<li className="list-none pr-4 text-pink-800">{item.description}</li>
									<li className="list-none text-purple-800">{item.amount}</li>
								</div>
								<div className="balances">Blance : 
								{
									detail.items
										.filter((item) => item.type === "inc")
										.map((item) => item.amount)
										.reduce((prev, next) => parseInt(prev) + parseInt(next), 0) -
									detail.items
										.filter((item) => item.type === "exp")
										.map((item) => item.amount)
										.reduce((prev, next) => parseInt(prev) + parseInt(next), 0)
								}
								</div>
							</div>
						})
						)
						:
						(<div className="text-center w-full text-pink-800 text-sm italic">No transaction yet</div>)
					}
					
				</div>
			}	
		</div>
	);
};

export default TransactionsMade;
