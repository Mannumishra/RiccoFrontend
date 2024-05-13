import React from 'react'
import './About.css'
import OurProduct from '../Product/OurProduct'

const About = () => {
  return (
    <>
      <div className="container  ourstory">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h3 className='text-center'>Our Story</h3>
            <p>Products that truly work, for you and the planet</p>
            <p>vooki stands for brilliant cleaning products that truly work, for you and the planet. Our vision is to add value in people’s life by enabling them to experience a guilt free cleaning experience, whilst embracing the betterment of the planet and leaving a better place to live for the generations to come.</p>
            <p>vooki products are carefully composed with hand-picked eco-friendly ingredients which are safe, skin-friendly and biodegradable. vooki delights you with its uncompromising cleaning performance and gives you a pride & satisfaction for caring family hygiene and a little contribution to the eco-friendly environment.</p>
            <div>
              <p>It is no more clean vs green, it is clean & green</p>
              <p>In the housekeeping segment, the cleaning performance and greener products are always considered as two sides of coins. Higher or quicker the cleaning performance, lesser the green product and vice versa. We mastered the art of balancing these two poles by following a sustainable and comprehensive approach right from raw material sourcing to production to distribution to end product usage and disposal. The sustainability is achieved and maintained through green chemistry and safe germ protection formula. Thus vooki is not a choice between clean and green but is your chance to stay green and experience top notch performance. Yes, vooki products are Type 1 Eco Label certified by GEN (Global Ecolabelling Network).</p>
            </div>
            <div>
              <p>It is no more clean vs green, it is clean & green</p>
              <p>In the housekeeping segment, the cleaning performance and greener products are always considered as two sides of coins. Higher or quicker the cleaning performance, lesser the green product and vice versa. We mastered the art of balancing these two poles by following a sustainable and comprehensive approach right from raw material sourcing to production to distribution to end product usage and disposal. The sustainability is achieved and maintained through green chemistry and safe germ protection formula. Thus vooki is not a choice between clean and green but is your chance to stay green and experience top notch performance. Yes, vooki products are Type 1 Eco Label certified by GEN (Global Ecolabelling Network).</p>
            </div>
          </div>
        </div>
        <div className="row ">
          <h5 className='text-center ourheading'>Try These Our Product</h5>
         <div style={{marginTop:"-130px"}}>
         <OurProduct value={false} />
         </div>
        </div>
      </div>
    </>
  )
}

export default About