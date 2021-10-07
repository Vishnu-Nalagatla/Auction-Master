import AuctionProductItems from "./AuctionProductItems"
import './AuctionProducts.css';
function AuctionProducts() {
    return (
        <div className="auction-items-container">
            <h1 className="auction-header">Featured Items</h1>
            <p className="auction-description">Click on submit a bid to submit your bid</p>
            <div className="auction-product-items">
             <AuctionProductItems/>
             </div>
            </div>
    )
}

export default AuctionProducts
