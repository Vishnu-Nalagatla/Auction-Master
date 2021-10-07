import React from 'react';
import AuctionProductItems from '../AuctionHomePage/AuctionProducts/AuctionProductItems';
import ProductFilter from './ProductFilter/ProductFilter';
import './productsServices.css';

function ProductsServices() {
    return (
        
            <div className="auction-data-container">
                <div className="auction-Product-items-component">
                <AuctionProductItems />
                </div>
                <div className="auction-product-filter-component">
                <ProductFilter></ProductFilter>
                </div>
            </div>

    )
}

export default ProductsServices
