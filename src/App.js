import './App.css';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import Products from './components/Products';
import Summary from './components/Summary';
import ProductState from './components/context/ProductState';

function App() {
  return (
    <ProductState>
        <div className="container w-full mx-auto bg-pink-50 h-screen">
          <Header />
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 w-fullmd:-ml-16 md:mx-60 gap-x-8">
            <div>
              <AddProduct />
              <Summary />
            </div>
            <div>
              <Products />
            </div>
          </div>
        </div>
    </ProductState>
  )
}

export default App;
