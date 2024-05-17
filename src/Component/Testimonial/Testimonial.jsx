import React, { useEffect, useState } from 'react';
import './Testimonial.css'; // Import CSS file for styling
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    const [data, setData] = useState([])

    const getTestimonialData = async () => {
        try {
            let res = await axios.get("https://api.myriccoproducts.com/api/testimonial")
            console.log(res)
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTestimonialData()
    }, [])

    let options = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 8000,
        navText: ["Prev", "Next"],
        responsive: {
            0: {
                items: 1
            },
            720: {
                items: 2
            },
            1080: {
                items: 3,
                slideBy: 3
            },
            1920: {
                items: 4
            }
        }
    }
    return (
        <div className="testimonial-section">
            <p className="section-title">Our Coustmor Review</p>
            <div className="testimonial-container">
                <OwlCarousel className='owl-theme' {...options}>
                    {
                        data && data.map((item, index) =>
                            <div className="testimonial">
                                <div className="testimonial-content">
                                    <div className="imgaediv">
                                        <img src={item.image} alt="" className='textimonial-image' />
                                    </div>
                                    <p className="testimonial-author">{item.name}</p>
                                    <p className="testimonial-text"> <span><i className="fa fa-quote-left text-orange"></i></span> {item.message} <span> <i className="fa fa-quote-right "></i></span></p>
                                    {/* <div style={{ marginTop: "-20px" }}>
                                        <i className='fa fa-star text-warning'></i>
                                        <i className='fa fa-star text-warning'></i>
                                        <i className='fa fa-star text-warning'></i>
                                        <i className='fa fa-star text-warning'></i>
                                        <i className='fa fa-star '></i>
                                    </div> */}
                                </div>
                                <div className="testimonial-icon">

                                </div>
                            </div>
                        )
                    }

                </OwlCarousel>
            </div>
        </div>
    );
}

export default Testimonial;
