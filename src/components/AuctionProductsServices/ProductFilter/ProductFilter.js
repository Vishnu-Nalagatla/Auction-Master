import React from "react";
import FilterBar from "./ProductsFiltering/FilterBar";
import FilterOptions from "./ProductsFiltering/FilterOptions";
import './ProductFilter.css';

function ProductFilter() {
  return (
    <>
      <div className="product-filter-container">
        <div className="product-filter-range-checkbox">
            <FilterOptions></FilterOptions>
        </div>
        <div className="product-filter-sortby">
            <FilterBar></FilterBar>
        </div>
      </div>
    </>
  );
}

export default ProductFilter;
