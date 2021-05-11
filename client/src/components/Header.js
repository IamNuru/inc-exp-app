import React, { useContext } from "react";
import ProductContext from "./context/products/ProductContext";

const Header = () => {
	// Create our number formatter.
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "GHS",
	});

	const productContext = useContext(ProductContext);
	const { products } = productContext;

	return (
		<div className="p-4 text-xl h-24 bg-gradient-to-r from-green-400 to-blue-500 text-center align-middle">
			Balance:{" "}
			{products.length > 0 &&
			products
				.filter((item) => item.type === "exp")
				.map((item) => item.amount)
				.reduce((prev, next) => parseInt(prev) + parseInt(next), 0) >
				products
					.filter((item) => item.type === "inc")
					.map((item) => item.amount)
					.reduce((prev, next) => parseInt(prev) + parseInt(next), 0) ? (
				<span className="bg-white py-2 px-4 text-pink-600 text-2xl">
					{formatter.format(
						products.length > 0
							? products
									.filter((item) => item.type === "inc")
									.map((item) => item.amount)
									.reduce((prev, next) => parseInt(prev) + parseInt(next), 0) -
									products
										.filter((item) => item.type === "exp")
										.map((item) => item.amount)
										.reduce((prev, next) => parseInt(prev) + parseInt(next), 0)
							: 0
					)}
				</span>
			) : (
				<span className="bg-white py-2 px-4 text-purple-600 text-2xl">
					{formatter.format(
						products.length > 0
							? products
									.filter((item) => item.type === "inc")
									.map((item) => item.amount)
									.reduce((prev, next) => parseInt(prev) + parseInt(next),0) -
									products
										.filter((item) => item.type === "exp")
										.map((item) => item.amount)
										.reduce((prev, next) => parseInt(prev) + parseInt(next),0)
							: 0
					)}
				</span>
			)}
		</div>
	);
};

export default Header;
