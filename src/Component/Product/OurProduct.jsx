import React, { useCallback, useEffect, useState } from 'react';
import './OurProduct.css';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';

const OurProduct = () => {
    const [data, setData] = useState([]);
    console.log('data', data)
    const [loading, setLoading] = useState(false)
    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://api.myriccoproducts.com/api/product")
            // console.log(response)
            setData(response?.data?.data);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        fetchData()
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
                items: 4,
                slideBy: 3
            },
            1920: {
                items: 4
            }
        }
    }
    return (
        <>
            <div className="container mt-5 maindiv">
                <div className="row mb-5">
                    <h3 className='text-center'>Products</h3>
                </div>
                <div className="row product">
                    {
                        loading ? <h4>Product is Loading</h4> :
                        (
                            <OwlCarousel className='owl-theme' {...options}>
                        {
                            data && data?.map((item, index) =>
                                <div className='ourproduct' key={index}>
                                    <div className='image-container'>
                                        <img src={item.pic1} alt="" className='image-zoom' style={{ height: "270px", width: "100%" }} />
                                        <span className="spanbutton" ><button className='normalbtnn text-light'>{item.tag}</button></span>
                                    </div>
                                    <div className='text-container'>
                                        <p><strong>{item.name}</strong></p>
                                        <p>{item.productdetails}</p>
                                        <p className='Price_para'><del className='text-danger'>RS. {item.sizes[0].price}</del> Rs : {item.sizes[0].finalprice}</p>
                                        <div className=" ">
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star text-warning"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <Link to={`/productdetails/${item._id}`}> <button className='button mb-3'>Add To Cart</button></Link>
                                    </div>
                                </div>
                            )
                        }

                    </OwlCarousel>
                        )
                    }
                </div>
            </div>

        </>
    );
}

export default OurProduct;
