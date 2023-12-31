import React from 'react'
import RocketIcon from '../Icons/RocketIcon'
import Space from '../../assets/images/astronaut-space-with-planet-background_1340-28941.jpg' 
import Anime from '../../assets/images/download.jpg'

export default function Main() {
  return (
    <div>
        <div className="container">
            <div className="row text-white mt-5 mb-5">
                <div className="col-12 col-md-6">
                 <h1>Discover Digital Arts & Collets NFTs</h1>
                 <p>NFTs Marketplace Ui Created With Amina For Figma.Collect,Buy and Sell Arts From More Than 20K NFT Artists.</p>
                 <button className='btn btn-primary fw-bold rounded-pill px-3 mt-2'><RocketIcon/> Get Started</button>
                 <div className="row mt-5">
                    <div className="col-4">
                        <h3>240K +</h3>
                        <p>Total Sale</p>
                    </div>
                    <div className="col-4">
                        <h3>100K +</h3>
                        <p>Auctions</p>
                    </div>
                    <div className="col-4">
                        <h3>240K +</h3>
                        <p>Artists</p>
                    </div>
                 </div>
                </div>
                <div className="col-12 col-md-6">
                 <img src={Space} alt="" className='img-fluid rounded-top'/>
                 <div className="container rounded-bottom pb-1 pt-2" style={{backgroundColor:"#495057"}}>
                    <h4>Space Walking</h4>
                    <p><img src={Anime} style={{width:"20px",height:"20px"}} alt="" className='img-fluid rounded-pill'/> Animekid</p>
                 </div>
                </div>
            </div>
        </div>
    </div>
  )
}
