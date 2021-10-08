import React from 'react'
import'./SellerLoginPage.css'


function SellerLoginPage() {

// const [auctionEndDate, setAuctionEndDate] = useState('')
//     const onAuctionEndDate = e =>{

//         setAuctionEndDate(e.target.value)

//     }


    // const date = new Date(auctionEndDate).getDate();
    // const month = new Date(auctionEndDate).getMonth()+1;
    // const year = new Date(auctionEndDate).getFullYear();
    // const hours = new Date(auctionEndDate).getHours();
    // const minutes = new Date(auctionEndDate).getMinutes();
    // const reload = () => {
    //     window.location.reload();
    // }



    return (
        <>
           <div className="seller-body-login">
           <form action="http://localhost:8080/SpringRest/add" method="post">
               <input type="text" className="product-name" placeholder="Product Name" name='productname' required />
               <select className="product-category" name="category" required>
                   <option value="" name="null" >Select</option>
                   <option value="cpu" name="grp1"  >CPUs</option>
                   <option value="laptops" name="grp1" >Laptops</option>
                   <option value="desktops" name="grp1" >Desktops</option>
                   <option value="Dell Laptops" name="grp1" >Dell Laptops</option>
                   <option value="ram" name="grp1" >Ram</option>
               </select>
               <input type="text" className="base-bid" placeholder="Base Amount" required name="bidAmount" />
               <input type="file" className="product-images" multiple="true"  name="pImage" accept="image/*;capture=camera" />
               <div>

                        <span>
                        Auction End Date :
                        </span>
                        <input 
                        type = "datetime-local"
                        // value = { auctionEndDate }
                        // onChange = {onAuctionEndDate}
                        />
                      {/* {console.log(`date`, date)}
                      {console.log(`month`, month)}
                      {console.log(`year`, year)}
                      {console.log(`hours`, hours)}
                      {console.log(`minutes`, minutes)} */}
                    </div>
               <input type="submit" className="product-submit-btn" />
               </form>
              </div> 
              {/* </div> */}
        </>
    )
}

export default SellerLoginPage




