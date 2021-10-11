import "./App.css";
import { BrowserRouter as Router,Switch, Link , Route} from 'react-router-dom'
import Navbar from "./components/AuctionHomePage/Header/Navbar/Navbar";
import AuctionHomePage from "./components/AuctionHomePage/AuctionHomePage";
import ProductsServices from "./components/AuctionProductsServices/ProductsServices";
import SignUp from "./components/AuctionHomePage/Header/SignUp-Page/SignUp";


function App() {
  return (
    <div className="App">
      <div className="nav-container"><Navbar></Navbar></div>

      <Router>
        <Switch>
          <Route exact path='/home'>
      <AuctionHomePage></AuctionHomePage>

      <ProductsServices></ProductsServices>
      </Route>
<Route exact path="/SignUp" component={SignUp} ></Route>

        </Switch>

      </Router>


    </div>
  );
}

export default App;
