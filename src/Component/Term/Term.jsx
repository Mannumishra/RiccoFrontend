import React, { useEffect } from 'react';
import './Term.css';

const Term = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p>Welcome to Ricco - Dishwash Gel. These terms and conditions outline the rules and regulations for the use of our website.</p>
      <p>By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Ricco's website if you do not accept all of the terms and conditions stated on this page.</p>

      <h2>1. Website Use</h2>
      <p>The use of this website is subject to the following terms of use:</p>
      <ul>
        <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
        <li>It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</li>
        <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
      </ul>

      <h2>2. Intellectual Property</h2>
      <p>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</p>

      <h2>3. Changes to Terms & Conditions</h2>
      <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
    </div>
  );
};

export default Term;
