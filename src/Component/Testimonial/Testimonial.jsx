import React, { useEffect, useState } from 'react';
import './Testimonial.css'; // Import CSS file for styling
import axios from 'axios';

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
    return (
        <div className="testimonial-section">
            <h5 className="section-title">Our Coustmor Review</h5>
            <div className="testimonial-container">

                {
                    data.map((item, index) =>
                        <div className="testimonial">
                            <div className="testimonial-content">
                                <img src={item.image} alt="" className='textimonial-image' />
                                <p className="testimonial-text">{item.message}</p>
                                <p className="testimonial-author">{item.name}</p>
                                <div style={{ marginTop: "-20px" }}>
                                    <i className='fa fa-star text-warning'></i>
                                    <i className='fa fa-star text-warning'></i>
                                    <i className='fa fa-star text-warning'></i>
                                    <i className='fa fa-star text-warning'></i>
                                    <i className='fa fa-star '></i>
                                </div>
                            </div>
                            <div className="testimonial-icon">
                                <i className="fa fa-quote-left "></i>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Testimonial;
