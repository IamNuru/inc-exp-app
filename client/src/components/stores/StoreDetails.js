import React from "react";
import Details from "./Details";
import SelectStore from "./SelectStore";
import TransactionsMade from "./TransactionsMade";
const StoreDetails = () => {
	return (
		<div>
			<SelectStore />
			<Details />
			<TransactionsMade />
		</div>
	);
};

export default StoreDetails;
