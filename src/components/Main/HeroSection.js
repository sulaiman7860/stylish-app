import React from 'react'
import Kitten from '../../assets/images/cat-g949759b84_1280.jpg'
import Drove from '../../assets/images/dove-g34956a0cd_1280.jpg'
import Bird from '../../assets/images/bird-g3a3f2a603_1280.jpg'
import Anime from '../../assets/images/download.jpg'

export default function HeroSection() {
    return (
        <div>
            <div className="container">
                <div className="row text-light mt-5 pt-5 mb-5">
                    <div className="col-12">
                        <h1>Trending Collections</h1>
                        <p>Checkout Our Weekly Updated Trending Collections.</p>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <img src={Kitten} alt="" className='img-fluid rounded' />
                                <div className="row mt-2 mb-2">
                                    <div className="col-4">
                                        <img src={Drove} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <img src={Bird} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <button className='btn btn-primary h-100 w-100 fw-bold rounded'>1024+</button>
                                    </div>
                                    <div className="container rounded-bottom pb-1 pt-2">
                                        <h4>DSGN Animals</h4>
                                        <p><img src={Anime} style={{ width: "20px", height: "20px" }} alt="" className='img-fluid rounded-pill' /> Mr Fox</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={Drove} alt="" className='img-fluid rounded' />
                                <div className="row mt-2 mb-2">
                                    <div className="col-4">
                                        <img src={Kitten} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <img src={Bird} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <button className='btn btn-primary h-100 w-100 fw-bold rounded'>1024+</button>
                                    </div>
                                    <div className="container rounded-bottom pb-1 pt-2">
                                        <h4>Magic Drove</h4>
                                        <p><img src={Anime} style={{ width: "20px", height: "20px" }} alt="" className='img-fluid rounded-pill' /> Shroome</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={Bird} alt="" className='img-fluid rounded' />
                                <div className="row mt-2 mb-2">
                                    <div className="col-4">
                                        <img src={Drove} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <img src={Kitten} alt="" className='img-fluid rounded' />
                                    </div>
                                    <div className="col-4">
                                        <button className='btn btn-primary h-100 w-100 fw-bold rounded'>1024+</button>
                                    </div>
                                    <div className="container rounded-bottom pb-1 pt-2">
                                        <h4>Dancing Bird</h4>
                                        <p><img src={Anime} style={{ width: "20px", height: "20px" }} alt="" className='img-fluid rounded-pill' /> BeKindRobot2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
