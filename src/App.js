import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/AuctionHomePage/Header/Navbar/Navbar";
import AuctionHomePage from "./components/AuctionHomePage/AuctionHomePage";
import ProductsServices from "./components/AuctionProductsServices/ProductsServices";
import SignUp from "./components/AuctionHomePage/Header/SignUp-Page/SignUp";
import { UserForm } from "./components/AuctionHomePage/Header/LoginPage/LoginPage";
import SignUpYoutube from "./components/AuctionHomePage/Header/SignUp-Page/SignUpYoutube";


function App() {
  return (
    <div className="App">
      <div className="nav-container"><Navbar></Navbar></div>


      <Switch>
        <Route exact path='/'>
          <AuctionHomePage></AuctionHomePage>

        </Route>
        <Route exact path='/products&services'>
          <ProductsServices></ProductsServices>
        </Route>
        <Route path="/signup" exact component={SignUp} ></Route>

        <Route path="/LoginPage" exact >
          <UserForm></UserForm>
        </Route>
      </Switch>


      {/* <SignUpYoutube></SignUpYoutube> */}




    </div>
  );
}

export default App;
