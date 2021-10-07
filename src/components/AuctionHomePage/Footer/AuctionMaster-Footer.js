import "./AuctionMasterFooter.css";
import data from "./AuctionMasterFooter.json";
import { BrowserRouter as Router, Link } from "react-router-dom";
function AuctionMasterFooter() {
  return (
    <div className="am-footer-container">
      <div className="footer-items-container">
        {data.footerLinks &&
          data.footerLinks.map((footerData, index) => {
            return (
              <div
                className={index === 3 ? " items lastone" : " items firstone"}
                key={footerData?.group}
              >
                <h3 className="footer-categories">{footerData.group}</h3>
                <div className="fo">
                  <ul>
                    {footerData.groupItems &&
                      footerData.groupItems.map((footerItems) => {
                        return (
                          <Router>
                            <li className="footer-items-list">
                              <Link className="list-link">
                                {footerItems.name}
                              </Link>
                            </li>
                          </Router>
                        );
                      })}

                    {footerData.groupId === "follow-us" && (
                      <li>
                        <div className="amfooter-icons">
                          <img
                            src="./fb.png"
                            alt="facebook logo"
                            className="fb"
                          />
                          <img
                            src="./twitter.png"
                            alt="twitter logo"
                            className="socialmedia-icons twitter"
                          />
                          <img
                            src="./instagram.png"
                            alt="instagram logo"
                            className="socialmedia-icons instagram"
                          />
                          <img
                            src="./linkedin.png"
                            alt="linkedin logo"
                            className="socialmedia-icons linkedin"
                          />
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
      <hr className="footer-row" />
      <div className="footer-paymets">
        <img src="./AMlogo.png" alt="am-logo" className="am-footer-logo" />
        <div className="payment-options">
          <img src="./paypal.png" alt="paypal" className="payment-cards" />
          <img src="./visa.png" alt="visa" className="payment-cards" />
          <img src="./discover.png" alt="discover" className="payment-cards" />
          <img
            src="./mastercard.png"
            alt="mastercard"
            className="payment-cards"
          />
        </div>
        <span>Copyright 2021 | Auction Manager</span>
      </div>
    </div>
  );
}

export default AuctionMasterFooter;
