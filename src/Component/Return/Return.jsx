import React, { useEffect } from 'react';
import './Return.css';

const Return = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
  return (
    <div className="return-container">
  <h1>Return & Refund Policy</h1>
  <p>We want you to be completely satisfied with your purchase from Ricco. If you are not satisfied with your purchase for any reason, you may return it for a refund or exchange within 2-3 days of receiving your order.</p>

  <h2>1. Return Eligibility</h2>
  <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>

  <h2>2. Return Process</h2>
  <p>To initiate a return, please contact our customer service team with your order number and reason for return. We will provide you with instructions on how to return your item.</p>

  <h2>3. Refund Processing</h2>
  <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If your refund is approved, it will be processed 3 to 4 days, and a credit will automatically be applied to your original method of payment within a certain number of days.</p>

  <h2>4. Return Shipping</h2>
  <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>

  <h2>5. Exchanges</h2>
  <p>If you would like to exchange your item for a different size or color, please contact our customer service team for assistance.</p>
</div>

  );
};

export default Return;
