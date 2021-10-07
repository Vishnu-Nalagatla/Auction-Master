import React from "react";
import currentBid from '../../../Assets/BidIcons/Current_Bid_Icon.png';
import buyBid from '../../../Assets/BidIcons/Buy_Now_Icon.png'

function AuctionProductData({items}) {
    return (
        <div className="auction-cards">
            <div className="auction-card-image-container">
          <img src={items.image} alt="" className="auction-card-images"/>
          </div>
          <div className="auction-item-name">{items.productname}</div>
          <hr/>
          <div className="auction-actions-container">
          <div className="auction-actions-current-bid">
              <img src={currentBid} alt="bid-icon" className="auction-action-image-current"/>

              <div className="auction-current-bid-container">
              <div className="auctions-action-name action-current">Current Bid</div>
              <div className="auctions-action-amount">{items.bidAmount}</div>
              </div>
          </div>
          <hr/>
          <div className="auction-actions-buynow-bid">
              <img src={buyBid} alt="buy-now" className="auction-action-image-buynow"/>
              
              <div className="auction-current-bid-container">
              <div className="auctions-action-name action-buynow">Buy Now</div>
              <div className="auctions-action-amount"> Rs 
              <input text="number" className="auction-buynow-amount" placeholder="Enter the Bid" />
              </div>
              </div>
          </div>
          </div>
          <hr />
          <div className="bid-duration-count">
          <span className="bid-time-left">{items.timeLeft}</span>
          <hr className="bid-duration-count-vrline"/>
          <span className="bid-count">{items.numOfBids}</span>
          </div>
          <div className="auctions-submit-btn">
              <button className="auction-card-btn">Submit A Bid</button>
          </div>
        </div>
    )
}

export default AuctionProductData
