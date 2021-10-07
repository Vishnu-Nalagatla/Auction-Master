import React from 'react'
import Header from './Header/Header';
import AuctionSampleData from './AuctionSampleData/AuctionSampleData'
import AuctionProducts from './AuctionProducts/AuctionProducts';
import AuctionMasterFooter from './Footer/AuctionMaster-Footer';

function AuctionHomePage() {
    return (
        <div>
            <Header></Header>
            <AuctionSampleData></AuctionSampleData>
            <AuctionProducts></AuctionProducts>
            <AuctionMasterFooter></AuctionMasterFooter>
        </div>
    )
}

export default AuctionHomePage
