import Product from "./components/Product";
import data from "./data";
import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div classNameName="App">
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">
                amazon
              </a>
            </div>
            <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
            </div>
          </header>
          <main>
            <Route exact component={ProductScreen} path="/product/:id" />
            <Route exact component={HomeScreen} path="/" />
          </main>
          <footer className="row center">All right reserved</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
