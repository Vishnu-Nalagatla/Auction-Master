import { useState, useEffect } from "react";
import axios from "axios";
import AuctionProductData from "./AuctionProductData";
function AuctionProductItems() {
  let headers = new Headers();

  headers.append("GET", "POST", "OPTIONS");
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/SpringRest/getData", {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => res.data)
      .then((data) => setItemData(data));
  }, []);
  console.log(itemData,"Backend Data");
  return (
    <div className="auction-item-cards-container">
      {itemData &&
        itemData
          .filter((items, index) => index < 3)
          .map((item) => <AuctionProductData key={item.id} items={item} />)}
    </div>
  );
}

export default AuctionProductItems;
