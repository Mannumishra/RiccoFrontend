import React, { useEffect, useState } from 'react'
import "./Bestseller.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
const BeastSeller = () => {
    const [data,setData] = useState([])

    const getBestApiData = async()=>{
        try {
            let res = await axios.get("https://api.myriccoproducts.com/api/bestseller")
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getBestApiData()
    },[])
    return (
        <>
            <div className="bestseller">
                <div className="bestseller">
                        <p className='bestsellertext'>
                            Best Sellers
                        </p>
                </div>
                <div className='maindivbestproduct'>
                   {data.map((item,index)=>
                    <div className='text-center'>
                    <Link  to="#"> <img src={item.image} alt="" className='bestproduct' /></Link>
                    <p className='bestname'>{item.productName}</p>
                </div>
                )}
                </div>
            </div>
        </>
    )
}

export default BeastSeller