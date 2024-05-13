import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    password: ""
  })
  const getInputdata = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const postData = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post("https://api.myriccoproducts.com/api/user", data)
      toast.success("Account created")
      navigate("/login")
    } catch (error) {
      // console.log(error);
      
    }
  }
  return (
    <>
      <div className="container maindiv">
        <div className="row mt-4">
          <div className='signupdaiv'>
            <div className='mt-4'>
              <h5 className='text-center'>Create An Account</h5>
              <form action="" onSubmit={postData}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" className='form-control' onChange={getInputdata} required/>
                <label htmlFor="">User Name</label>
                <input type="text" name="username" id="" className='form-control' onChange={getInputdata} required/>
                <label htmlFor="">Email</label>
                <input type="text" name="email" id="" className='form-control' onChange={getInputdata} required/>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" name="phone" id="" className='form-control' onChange={getInputdata} required/>
                <label htmlFor="">Password</label>
                <input type="text" name="password" id="" className='form-control' onChange={getInputdata} required/>
                <button type="submit" className='button'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
