import { useState, useEffect } from "react";
import axios from "axios";
import AuctionProductData from "./AuctionProductData";
function AuctionProductItems() {
  let headers = new Headers();

  headers.append("GET", "POST", "OPTIONS");
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.npoint.io/aaa85844cab34d50c3c4", {
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
