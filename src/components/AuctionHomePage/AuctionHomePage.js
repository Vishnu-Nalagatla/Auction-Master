import React from 'react'
import Header from './Header/Header';
import AuctionSampleData from './AuctionSampleData/AuctionSampleData'
import AuctionProducts from './AuctionProducts/AuctionProducts';

function AuctionHomePage() {
    return (
        <div>
            <Header></Header>
            <AuctionSampleData></AuctionSampleData>
            <AuctionProducts></AuctionProducts>
        </div>
    )
}

export default AuctionHomePage
