import './App.css';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import Products from './components/Products';
import Summary from './components/Summary';
import ProductState from './components/context/ProductState';

function App() {
  return (
    <ProductState>
        <div className="container w-full mx-auto bg-pink-100 h-screen">
          <Header />
          <div className="w-96 m-auto">
            <AddProduct />
            <Products />
            <Summary />
          </div>
        </div>
    </ProductState>
  )
}

export default App;
