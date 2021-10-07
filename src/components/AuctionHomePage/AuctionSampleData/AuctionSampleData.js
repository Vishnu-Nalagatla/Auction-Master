import React from "react";
import data from "./data.json";
import './AuctionSampleData.css'
function AuctionSampleData() {
  return (
    <div className="app">
      <h1 className="head"> Auctions are a Best Practice for Strategic Sourcing </h1>
      <div className="parent-div">
      {data.map((data, index) => 
          index % 2 ===0 ? (
            <div className="card" style={{backgroundImage:"url('"+data.image+"')",backgroundRepeat: 'no-repeat',backgroundColor:"#b6b6b6"}}>
              <p className="ptag">{data.matter} </p>
              <button className="click-btn"> Click Here</button>
            </div>
          ) : (
            <div className="card" style={{backgroundImage:"url('"+data.image+"')",backgroundRepeat: 'no-repeat', backgroundPositionX:'right',backgroundColor:'#b6b6b6'}}>
              <p className="ptag">{data.matter} </p>
              <button className="click-btn"> Click Here</button>
            </div>
          )
        )}
        {/* {data.map((data, index) =>
         (
            <div className="card"
            if(data.image)
            style={{backgroundImage:"url('"+data.image+"')",backgroundRepeat: 'no-repeat',}}>
              <p className="ptag">{data.matter} </p>
              <button className="click-btn"> click here</button>
            </div>
          ))} */}  
          
      </div>
    </div>
  );
}

export default AuctionSampleData;
