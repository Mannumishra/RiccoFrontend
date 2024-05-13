import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Toiletcleaner = () => {
    const [data, setData] = useState([])

  const getApiData = async () => {
    try {
      let res = await axios.get("https://api.myriccoproducts.com/api/product")
      console.log(res);
      setData(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const newdata = data.filter((x) => x.category === "Toiletcleaner")

  useEffect(() => {
    getApiData()
  }, [])
  return (
    <>
      <div className='maindiv'>
        <div className='florbadcum'>
          <div className='categoryname'>
            <p className='categorynametext'>Toilet Cleaner Product</p>
          </div>
        </div>
        <div className='container'>
          <div className="row ">
            {
              newdata.map((item, index) =>
                <div className='ourproductt' key={index}>
                  <div className='image-container'>
                    <img src={item.pic1} alt="" className='image-zoom' style={{ height: "270px", width: "100%" }} />
                    <span className="spanbutton" ><button className='normalbtnn text-light'>sale</button></span>
                    {/* <img src={item.pic2} alt="" className='image-zoom-hover' /> */}
                  </div>
                  <div className='text-container'>
                    <p><strong>Product Name: </strong>{item.name}</p>
                    <p><strong>Product Category: </strong>{item.category}</p>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Toiletcleaner