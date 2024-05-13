import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "./ProductDetails.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import OurProduct from '../Product/OurProduct'



const ProductDetails = () => {
    const navigate = useNavigate()
    const { _id } = useParams()
    const [data, setData] = useState({})
    let [qty, setQty] = useState(1)
    const [activeSize, setActiveSize] = useState()
    const [activeSizePrice, setActiveSizePrice] = useState()
    const [activeSizeDiscount, setActiveSizeDiscount] = useState()
    const [activeSizeFinalPrice, setActiveSizeFinalPrice] = useState()
    const [activeSizeStock, setActiveSizeStock] = useState()

    const loginvalue = sessionStorage.getItem("login")

    const addToCart = async () => {
        try {
            if (activeSize && activeSizePrice) {
                const newItem = {
                    userid: sessionStorage.getItem("userid"),
                    productid: data._id,
                    productname: data.name,
                    quantity: qty,
                    size: activeSize,
                    price: activeSizeFinalPrice,
                    pic: data.pic1
                }
                if (newItem.quantity > 0 && loginvalue === "true") {
                    let res = await axios.post('https://api.myriccoproducts.com/api/cart', newItem);
                    if (res.status === 200) {
                        toast.success("Product Added to cart")
                        navigate("/cart")
                    }
                }
                else {
                    toast.error("Please login then you can add the product in cart");
                    setTimeout(() => {
                        navigate("/login")
                    }, 1000);
                }

            } else {
                console.error('Please select a size.');
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const handleSize = (size) => {
        setActiveSizePrice(size.price)
        setActiveSize(size.size)
        setActiveSizeDiscount(size.discountprice)
        setActiveSizeFinalPrice(size.finalprice)
        setActiveSizeStock(size.stock)
    }
    const getApiData = async () => {
        try {
            let res = await axios.get("https://api.myriccoproducts.com/api/product/" + _id)
            console.log(res)
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const getInitialSize = async () => {
            try {
                await getApiData()
                if (data.sizes && data.sizes.length > 0) {
                    const initialSize = data.sizes[0];
                    handleSize(initialSize);
                }
            } catch (error) {
                console.error('Error setting initial size:', error);
            }
        };
        getApiData()
        getInitialSize();
    }, []);

    return (
        <>
            {/* <!-- Single Product Start --> */}
            <div className="container-fluid productdetailsheight">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div id="carouselExampleIndicators" className="carousel slide">
                                {/* <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                </div> */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={data.pic1} className="d-block w-100 singlrpageimage" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={data.pic2} className="d-block w-100 singlrpageimage" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={data.pic3} className="d-block w-100 singlrpageimage" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={data.pic4} className="d-block w-100 singlrpageimage" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden ">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className='mt-1 d-flex gap-1'>
                                <img src={data.pic1} className=' singlrpageimageslide' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" alt="" />
                                <img src={data.pic2} className=' singlrpageimageslide' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" alt="" />
                                <img src={data.pic3} className=' singlrpageimageslide' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" alt="" />
                                <img src={data.pic4} className=' singlrpageimageslide' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 productsecondcol">
                            <h4 className="fw-bold mb-2">{data.name}</h4>

                            <div className="d-flex mb-2 mt-3">
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            {/* <p>Color : {color}</p> */}
                            <div style={{ display: "flex", gap: "20px", marginTop: 20 }}>
                                {data?.sizes ? (
                                    data.sizes.map((item, index) => (
                                        <button
                                            className={`btn ${activeSize === item.size ? 'btn-primary' : 'btn-danger'}`}
                                            key={index}
                                            onClick={() => handleSize(item)}
                                        >
                                            Size: {item.size}
                                        </button>
                                    ))
                                ) : null}
                            </div>
                            <div style={{ display: "flex", gap: 15, padding: 10, fontSize: 20, fontWeight: 700, opacity: 0.9 }}>
                                <div>
                                    <del className='text-dark'>Rs.{activeSizePrice}</del>
                                </div>
                                <div className='text-danger' style={{ fontSize: 25 }}>
                                    Rs.{activeSizeFinalPrice}
                                </div>
                                <div>
                                    | Save Rs.{activeSizeDiscount}
                                </div>
                            </div>
                            <p className="mb-2">{data.productdetails}</p>
                            <p><strong>This Item:</strong> {data.name}</p>
                            {
                                <>
                                    <div className="input-group quantity mb-2" style={{ width: "300px" }}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => qty > 1 ? setQty(qty - 1) : ""} >
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <p className='mx-3'>{qty}</p>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => setQty(qty + 1)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <button className="btn border border-primary rounded-pill mt-1 px-4 py-2 mb-4 text-primary" onClick={addToCart}><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</button>&nbsp;
                                </>
                            }
                            <p className="mb-2">
                                {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
                            </p>
                        </div>
                    </div>
                    <div className="descriptiondiv">
                        <p className='descriptionheading'>Description</p>
                        <p className='descriptionpara'>{data.description}</p>
                    </div>
                    <h3 className="fw-bold mt-5 text-center">Related products</h3>
                    <OurProduct />
                </div>
            </div>
        </>
    )
}

export default ProductDetails
