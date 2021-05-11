import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul className="list-none flex p-2 w-full place-content-center">
				<li className="w-24 min-h-8 bg-purple-600 mx-2 shadow-lg font-medium text-center">
					<Link to="/" className="w-full block px-4 text-white">
						Home
					</Link>
				</li>
				<li className="w-24 min-h-8 bg-purple-600 mx-2 shadow-lg font-medium text-center">
					<Link to="/stores" className="w-full block px-4 text-white">
						Stores
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
