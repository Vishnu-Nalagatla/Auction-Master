import React , { useState } from "react";
import "./FilterOptions.css";
import { Slider } from '@material-ui/core'
import { MuiThemeProvider } from "@material-ui/core";
import { getMuiTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";


const minDistance = 10;
function FilterOptions() {

  // const muiTheme = getMuiTheme({
  //   slider: {
  //     trackColor: "yellow",
  //     selectionColor: "green"
  //   }
  // })

//   const [rangeSlide, setrangeSlide] = useState([0, 2000000])
//   const updateRange = (e,data) => {
// setrangeSlide(data)
//   }

  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <>
      <div className="filter-options-container">
        <div className="filter-by-price">
        <div className="auction-filter-range-heading">Filter by Price</div>
        <div className="auction-filter-range-bar">

        <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        // disableSwap
      />
          {/* <Slider value={rangeSlide} onChange={updateRange} /> */}
          {/* <MuiThemeProvider muiTheme={muiTheme}>
     <Slider
         min={0}
         max={2000000}
         defaultValue={40}
     />
</MuiThemeProvider> */}
        </div>

        <div className="auction-filter-range-count">
          <span>Price : </span>
          <div className="filter-range-price">₹ 80K - 10Lac</div>
        </div>

        <button type="button" className="auction-filter-range-btn">Filter</button>

        </div>

        <div className="filter-auction-type">
          <div className="auction-type-headings">Auction Type</div>
          <div className="auction-type-checkbox">
            <input type="checkbox" id="Live-Auction" />
            <label htmlFor="Live-Auction" className="checkbox-names">
              Live Auction
            </label>
            <br />
            <input type="checkbox" id="Timed-Auction" />
            <label htmlFor="Timed-Auction" className="checkbox-names">
              Timed Auction
            </label>
            <br />
            <input type="checkbox" id="Buy-Now" />
            <label htmlFor="Buy-Now" className="checkbox-names">
              Buy Now
            </label>
            <br />
          </div>
        </div>
        <div className="auction-ending-time">
          <div className="auction-ending-headings">Ending Within</div>
          <div className="auction-ending-checkbox">
            <input type="checkbox" id="1day" />
            <label htmlFor="1day" className="checkbox-names">
              1 day
            </label>
            <br />
            <input type="checkbox" id="1week" />
            <label htmlFor="1week" className="checkbox-names">
              1 week
            </label>
            <br />
            <input type="checkbox" id="1month" />
            <label htmlFor="1month" className="checkbox-names">
              1 month
            </label>
            <br />
            <input type="checkbox" id="3months" />
            <label htmlFor="3months" className="checkbox-names">
              3 months
            </label>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterOptions;
