import Product from "./components/Product";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div classNameName="App">
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">
                amazon
              </Link>
            </div>
            <div>
              <Link to="/cart">
                Cart
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
              <Link to="/signin">Sign In</Link>
            </div>
          </header>
          <main>
            <Route component={CartScreen} path="/cart/:id?" />
            <Route component={ProductScreen} path="/product/:id" />
            <Route exact component={HomeScreen} path="/" />
          </main>
          <footer className="row center">All right reserved</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
