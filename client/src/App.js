import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductState from "./components/context/products/ProductState";
import StoreState from "./components/context/stores/StoreState";
import StoresContainer from "./components/stores/StoresContainer";
import HomePage from "./components/HomePage";

function App() {

	
	return (
		<StoreState>
			<ProductState>
				<Router>
					<div className="mx-4 bg-pink-50 h-screen">
						<Header />
						<Navbar />
						<Switch>
							{/* <Route
								exact
								path="/"
								render={(props) => (
									
								)}
							/> */}
							<Route exact path="/" component={HomePage} />
							<Route exact path="/stores" component={StoresContainer} />
						</Switch>
					</div>
				</Router>
			</ProductState>
		</StoreState>
	);
}

export default App;
