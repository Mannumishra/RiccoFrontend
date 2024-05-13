import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [cartData, setCartData] = useState([]);
  const[uppertext,setUppertext] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUppertext = async()=>{
    try {
      let res = await axios.get('https://api.myriccoproducts.com/api/marquee')
      // console.log(res)
      setUppertext(res.data.data)
      console.log(uppertext)
    } catch (error) {
      console.log(error);
    }
  }
  const getApiData = async () => {
    try {
      let res = await axios.get('https://api.myriccoproducts.com/api/cart/' + sessionStorage.getItem("userid"));
      setCartData(res.data.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
    getUppertext()
    const userToken = sessionStorage.getItem("token");
    setIsLoggedIn(!!userToken);
  }, []);

  const handleNavItemClick = () => {
    // Close the navbar when a link is clicked
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  return (
    <>
      <div className="fixed-top">
        <div className='d-flex marquediv'  style={{ }}>
         {
          uppertext.map((item,index)=>
            <marquee behavior="scroll" direction="left" className="marquetag" >
      {item.text}
          </marquee>
          )
         }
        </div>
        <nav className="navbar navbar-expand-lg navbar-light mainnavbar">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" onClick={handleNavItemClick}><img src="../image/ricco logo.png" alt="" className='logoimgage' /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-home" id="navbarSupportedContent" >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-1">
                <li className="nav-item">
                  <Link className="nav-link iconcolorr" aria-current="page" to="/floor" onClick={handleNavItemClick}>FloorCleaner</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link iconcolorr" aria-current="page" to="/toilet" onClick={handleNavItemClick}>ToiletCleaner</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link iconcolorr" aria-current="page" to="/bathroom" onClick={handleNavItemClick}>Bathroom & tileCleaner</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link iconcolorr" aria-current="page" to="/supercleen" onClick={handleNavItemClick}>SuperClean</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link iconcolorr" aria-current="page" to="/riccodeter" onClick={handleNavItemClick}>RiccoDetergent</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link iconcolorr" aria-current="page" to="/diswash" onClick={handleNavItemClick}>DishwashGel</Link>
                </li>
              </ul>
              <ul style={{ display: "flex", listStyle: "none", gap: "20px", fontSize: "30px", color: "white" }}>
                {
                  isLoggedIn ? <li> <Link to='/profile' onClick={handleNavItemClick}><i className="fa fa-user iconcolor"></i></Link></li> :
                    <li> <Link to='/login' onClick={handleNavItemClick}><i className="fa fa-user iconcolor"></i></Link></li>
                }
                <li><Link to="/cart" onClick={handleNavItemClick}><i className="fa fa-shopping-cart iconcolor"><sup className='text-dark'>{cartData}</sup></i></Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
