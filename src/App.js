
import './App.css';
import toast, { Toaster } from 'react-hot-toast';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/footer/Footer';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/contact/Contact';
import Services from './Component/Service/Services';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import ProductDetails from './Component/Productdetails/ProductDetails';
import Testimonial from './Component/Testimonial/Testimonial';
import Cart from './Component/Cart/Cart';
import ProductCollection from './Component/Productcollection/ProductCollection';
import Profile from './Component/Profile/Profile';
import UpdateProfile from './Component/Profile/UpdateProfile';
import Checkout from './Component/Checkout/Checkout';
import Forgetpassword1 from './Component/ForgetPassword/Forgetpassword1';
import Forgetpassword2 from './Component/ForgetPassword/Forgetpassword2';
import Forgetpassword3 from './Component/ForgetPassword/Forgetpassword3';
import Floor from './Component/Category/Floorcleaner/Floor';
import Bathroom from './Component/Category/Bathroom&tile/Bathroom';
import Dishwash from './Component/Category/Dishwashgel/Dishwash';
import Riccodetr from './Component/Category/Ricoditergent/Riccodetr';
import Supercleen from './Component/Category/Superclean/Supercleen';
import Thanku from './Component/Thanku/Thanku';
import Toiletcleaner from './Component/Category/Tilecleaner/Toiletcleaner';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourstory" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createaccount' element={<Signup />} />
          <Route path='/productdetails/:_id' element={<ProductDetails />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productcate1' element={<ProductCollection />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/update-profile' element={<UpdateProfile />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/forgetpassword1' element={<Forgetpassword1 />} />
          <Route path='/forgetpassword2' element={<Forgetpassword2 />} />
          <Route path='/forgetpassword3' element={<Forgetpassword3 />} />
          <Route path='/floor' element={<Floor />} />
          <Route path='/bathroom' element={<Bathroom />} />
          <Route path='/diswash' element={<Dishwash />} />
          <Route path='/riccodeter' element={<Riccodetr />} />
          <Route path='/supercleen' element={<Supercleen />} />
          <Route path='/toilet' element={<Toiletcleaner />} />
          <Route path='/thanku' element={<Thanku />} />

        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
