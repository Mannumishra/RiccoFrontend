import React, { useState } from 'react'
import "./forgetpassword.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Forgetpassword1 = () => {
    const [email, setEmail] = useState()
    const navigate = useNavigate()
    const getInputData = (e) => {
        setEmail(e.target.value)
    }
    const postdata = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post("https://api.myriccoproducts.com/api/user/forgetpassword1", { email: email })
            if (res.status === 200) {
                toast.success("Otp send your email addredd")
                navigate("/forgetpassword2")
            }
        } catch (error) {

        }
    }
    return (
        <>
            <div className='forgetpassword'>
                <form action="" onSubmit={postdata}>
                    <label htmlFor="">Email ID</label>
                    <input type="text" name="email" id="" onChange={getInputData} placeholder='Enter Your email Address' className='form-control' />
                    <button className='btn btn-dark mt-2'>Send Otp</button>
                </form>
            </div>
        </>
    )
}

export default Forgetpassword1