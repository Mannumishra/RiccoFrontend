import React, { useEffect, useState } from 'react'
import "./Contact.css"
import axios from 'axios'
import toast from 'react-hot-toast'

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const getInputData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const postdata = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post("https://api.myriccoproducts.com/api/contact", data)
      if (res.status === 200) {
        toast.success("Success Fully Send Details")
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>

      <div className='maindivcontact'>
        <div className='florbadcum'>
          <div className='categoryname'>
            <p className='categorynametext'>Contact US</p>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13995.817006069245!2d77.06980582794802!3d28.72091317777585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06be58232cb9%3A0x5bd58155cd40327a!2sSector%2023%2C%20Rohini%2C%20Delhi%2C%20110099!5e0!3m2!1sen!2sin!4v1714823342548!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-md-6">
              <div className="contactheading">
                Get in Touch
              </div>
              <form action="" onSubmit={postdata}>
                <div classNam="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Name </label>
                  <input type="text" className="form-control" name='name' onChange={getInputData} placeholder="Enter Name" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email </label>
                  <input type="email" className="form-control" name='email' onChange={getInputData} placeholder="Email Address" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Phone </label>
                  <input type="text" className="form-control" name='phone' onChange={getInputData} placeholder="Phone" />
                </div>
                <div className="mb-4">
                  <label for="exampleFormControlInput1" className="form-label">Message </label>
                  <input type="text" className="form-control" name='message' onChange={getInputData} placeholder="Message" />
                </div>
                <div className="mb-3 btndiv">
                  <button className='contactbutton'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact