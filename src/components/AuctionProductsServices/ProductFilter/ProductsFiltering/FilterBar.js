import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FilterBar.css";
import AuctionProductData from "../../../AuctionHomePage/AuctionProducts/AuctionProductData";
function FilterBar() {
  const [filterData, setFilterData] = useState([]);
  const [price, setPrice] = useState("all");
  const [categoryNames, setCategoryNames] = useState("all");
  const [searchName, setSearchName] = useState("");
  const [final, setFinal] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/SpringRest/getData")
      .then((res) => res.data)
      .then((data) => setFilterData(data));
  }, []);

  console.log(filterData, "filterData");

  // const filteredByName = filterData.filter((n, index) => n.name.toLocaleLowerCase().includes(final.toLocaleLowerCase()))

  const filteredByCategory = filterData.filter((n, index) => n.category === categoryNames.toLocaleLowerCase());

  const uniqueCategory = [...new Set(filterData.map((uniCategory) => uniCategory.category))];

  console.log(`uniqueCategory`, uniqueCategory);

  console.log(categoryNames, "categoryNames");


  function capitalize(uniqueCategory) {
    return uniqueCategory.charAt(0).toUpperCase() + uniqueCategory.slice(1);
  }
  
  const caps = uniqueCategory.toString().split(',').map(capitalize);
  console.log(`caps`, caps)



  return (
    <>
      <div className="filter-bar-container">
        <div className="sort-by-price">
          <span className="filter-bar-labels">Category :</span>
          <select
            className="sort-by-options-price"
            onChange={(e) => {
              return setCategoryNames(e.target.value);
              // ,
              // setTimeout(function () {
              //   window.scrollBy({
              //     top: 500,
              //     behavior: "smooth",
              //   });
              // }, 100)
            }}
          >
            <option value="All">All</option>
            {caps.map((uniCategory) => (
              <option value={uniCategory}>{uniCategory}</option>
            ))}
          </select>
        </div>
        <div className="sort-by-category">
          <span className="filter-bar-labels">Sort by :</span>
          <select
            className="sort-by-options-items"
            onChange={(e) => {
              return setPrice(e.target.value);
              // ,
              // setTimeout(function () {
              //   window.scrollBy({
              //     top: 500,
              //     behavior: "smooth",
              //   });
              // }, 100)
            }}
          >
            <option value="all">All</option>
            <option value="Lowest-Highest">Lowest - Highest</option>
            <option value="Highest-Lowest">Highest - Lowest</option>
          </select>
        </div>
        <div className="filter-search">
          <input
            onFocus={() =>
              (document.getElementsByClassName(
                "filter-search"
              )[0].style.border = "2px solid black")
            }
            onBlur={() =>
              (document.getElementsByClassName(
                "filter-search"
              )[0].style.border = "1px solid #e3e3e3")
            }
            type="text"
            className="search-name"
            placeholder="Item Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <img
            className="search-icon"
            onClick={() => setFinal(searchName)}
            alt="Search"
            src="https://i.ibb.co/2jqDpxH/Icon-feather-search.png"
          />
        </div>
      </div>
      <div className="filter-bar-data">
        {/* {console.log(filteredByName ,'filteredByName')} */}
        {console.log(filteredByCategory, "filteredByCategory")}
        {
          // categoryNames === "all" ? setFilteredData(filterData) : setFilteredData(filteredByCategory)
        }
        {/* { 
        categoryNames === "all"? (
          price === "all" ? 
          filterData.map((fil) => 
              <AuctionProductData key={fil.id} items={fil} />
        ):
         filterData.sort((a,b) => (
        price === 'Lowest-Highest'?
        a.currentBidAmount > b.currentBidAmount ? 1 : -1
        :
        price === "Highest-Lowest"?
        a.currentBidAmount < b.currentBidAmount ? 1 : -1
        :
        a.id>b.id ?1:-1
        ))
        .map((fil) => 
        <AuctionProductData key={fil.id} items={fil} />
  )   
      )
          :     
        filteredByCategory.map((fil) => (
              <AuctionProductData key={fil.id} items={fil} />
              ))} */}
        {filteredByCategory
          .sort((a, b) =>
            price === "Lowest-Highest"
              ? a.bidAmount > b.bidAmount
                ? 1
                : -1
              : price === "Highest-Lowest"
              ? a.bidAmount < b.bidAmount
                ? 1
                : -1
              : a.id > b.id
              ? 1
              : -1
          )
          .map((fil) => (
            <AuctionProductData key={fil.id} items={fil} />
          ))}
      </div>
    </>
  );
}

export default FilterBar;
