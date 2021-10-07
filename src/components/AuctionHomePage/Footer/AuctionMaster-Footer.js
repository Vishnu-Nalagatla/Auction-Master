import "./AuctionMasterFooter.css";
import AMLogo from '../../../Assets/AMLogo.png'
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
                            src="https://i.ibb.co/JzTXVXQ/Facebook.png"
                            alt="facebook logo"
                            className="socialmedia-icons fb"
                          />
                          <img
                            src="https://i.ibb.co/LCrmbdd/Twitter.png"
                            alt="twitter logo"
                            className="socialmedia-icons twitter"
                          />
                          <img
                            src="https://i.ibb.co/9wznL8w/Instagram.png"
                            alt="instagram logo"
                            className="socialmedia-icons instagram"
                          />
                          <img
                            src="https://i.ibb.co/rdzRV7P/Linked-In.png"
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
        <img src={AMLogo} alt="am-logo" className="am-footer-logo" />
        <div className="payment-options">
          <img src="https://i.ibb.co/yn3ZNtk/paypal.png" alt="paypal" className="payment-cards" />
          <img src="https://i.ibb.co/tb9G4cv/visa.png" alt="visa" className="payment-cards" />
          <img src="https://i.ibb.co/W25X7vb/discover.png" alt="discover" className="payment-cards" />
          <img
            src="https://i.ibb.co/fvz7JN6/mastercard.png"
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
