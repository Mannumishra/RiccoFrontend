import React, { useState } from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Footer = () => {
    const [email, setEmail] = useState("")

    const getInputData = (e) => {
        setEmail(e.target.value)
    }
    const postData = async (e) => {
        e.preventDefault()
        try {
            alert(email)
            let res = await axios.post("https://api.myriccoproducts.com/api/newsletter", email)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        // style={{backgroundColor:"#12699c"}}
        <>
            {/* <div className="container-fluid  text-white-50 footer pt-5 mt-5 bg-dark " >
                <div className="container py-5">
                    <div className="pb-4 mb-4" style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <a href="#" style={{ textDecoration: "none" }}>
                                 
                                    <img src="./image/IMG_2879.JPG" alt="" className='logoimgage' />
                                   
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <p className='text-center text-light'></p>
                                <form>
                                    <div className="position-relative mx-auto">
                                        <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" name='email' type="email" placeholder="Your Email" />
                                        <button type="submit" className=" border-0 border-light py-3 px-4 position-absolute rounded-pill text-white" style={{ top: 0, right: 0, backgroundColor: "#12699c" }}>Subscribe Now</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3">
                                <div className="d-flex justify-content-end pt-3">
                                    <a className="btn  btn-outline-light me-2 btn-md-square rounded-circle" href=""><i className="fa fa-twitter"></i></a>
                                    <a className="btn btn-outline-light me-2 btn-md-square rounded-circle" href=""><i className="fa fa-facebook"></i></a>
                                    <a className="btn btn-outline-light me-2 btn-md-square rounded-circle" href=""><i className="fa fa-youtube"></i></a>
                                    <a className="btn btn-outline-light btn-md-square rounded-circle" href=""><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Why People Like us!</h4>
                                <p className="mb-4 text-light">typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3">Bottom Menu</h4>
                                <Link className="btn-link text-light" to="/">Home</Link>
                                <Link className="btn-link text-light" to="/shop">Shop</Link>
                                <Link className="btn-link text-light" to="/contactus">Contact</Link>
                                <Link className="btn-link text-light" to="/testimonial">Testimonials</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3">Quick Links</h4>
                                <a className="btn-link text-light" href="">Privacy policy</a>
                                <a className="btn-link text-light" href="">Terms & Conditions</a>
                                <a className="btn-link text-light" href="">Refund Policy</a>
                                <a className="btn-link text-light" href="">FAQ</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Contact</h4>
                                <p className='text-light'>Address: </p>
                                <p className='text-light'>Email: <a className='text-light' href="mailto:mannu22072000@gmail.com"></a></p>
                                <p className='text-light'>Phone: <a className='text-light' href="tel:+919354757842"></a></p>
                                <p className='text-light'>Whatsapp: <a className='text-light' href="https://wa.me/+919354757842"></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <hr />
            <div>
                <img src="./image/ricco logo.png" alt="" className='footerlogo' />
            </div>
            <div className='newfooter'>
                <div className='fistdivfooter'>
                    <div>
                        <p className='footerheanding'>About the shop</p>
                        <p>Ricco is redefining cleanliness with a sprinkle of surprise. Started in New Delhi in the year we needed it most, 2020, Ricco is bringing sophistication and style not just to your cleaning routine, but also creating effective, and eco-friendly products for a sparkling home.</p>
                        <p>Ricco offers thoughtfully designed detergents, cleaning products, and home care solutions.</p>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <i className="fa fa-twitter"style={{color:"#1DA1F2"}} ></i>
                        <i className="fa fa-facebook" style={{color:"#1877F2"}}></i>
                        <i className="fa fa-youtube" style={{color:"#FF0000"}}></i>
                        <i className="fa fa-linkedin" style={{color:"#0A66C2"}}></i>
                    </div>
                </div>
                <div className='seconddivfooter'>
                    <p className='footerheanding mt-2'>USe Full Link</p>
                    <Link to="/contact" className='footerlinks'> <p className='mt-4'>ContactUs</p></Link>
                    <Link to="/term" className='footerlinks'> <p>Term & Condition</p></Link>
                    <Link to="/shipping" className='footerlinks'> <p>Shipping & Delivery</p></Link>
                    <Link to="/privacy" className='footerlinks'> <p>Privacy Policy</p></Link>
                    <Link to="/refund" className='footerlinks'> <p>Return & Refund Policy</p></Link>
                    
                    
                    
                    {/* <Link to="/#" className='footerlinks'> <p></p></Link> */}

                </div>
                <div className='thirddivfooter'>
                    <p className='footerheanding'>Newsletter</p>
                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form action="" onSubmit={postData}>
                        <input type="text" name="email" id="" placeholder='Enter your email Address' onChange={getInputData} /><br />
                        <button className='btn btn-warning mt-2 text-light'>Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Footer