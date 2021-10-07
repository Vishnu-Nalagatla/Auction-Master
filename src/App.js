import "./App.css";
import Navbar from "./components/AuctionHomePage/Header/Navbar/Navbar";
import AuctionHomePage from "./components/AuctionHomePage/AuctionHomePage";
import ProductsServices from "./components/AuctionProductsServices/ProductsServices";


function App() {
  return (
    <div className="App">
      <div className="nav-container"><Navbar></Navbar></div>
      <AuctionHomePage></AuctionHomePage>

      {/* <ProductsServices></ProductsServices> */}

    </div>
  );
}

export default App;
