import React, { useEffect, useState } from 'react'
import './Home.css'
import BeastSeller from '../Bestseller/BeastSeller'
import Testimonial from '../Testimonial/Testimonial'
import ProductCollection from '../Productcollection/ProductCollection'
import axios from 'axios'
import OurProduct from '../Product/OurProduct'

const Home = () => {
  const [data, setData] = useState([])

  const getBanner = async () => {
    try {
      let res = await axios.get("https://api.myriccoproducts.com/api/banare")
      console.log(res)
      setData(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBanner()
  }, [])
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
         {
          data.map((item,index)=>
            <div className="carousel-item active">
          <img src={item.image} className="d-block w-100" alt="..." />
        </div>
          )
         }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <BeastSeller />
      </div>
      <div>
        <OurProduct />
      </div>
      <div>
        <ProductCollection />
      </div>
      <div>
        < OurProduct/>
      </div>
      <div>
        <Testimonial />
      </div>
    </>
  )
}

export default Home