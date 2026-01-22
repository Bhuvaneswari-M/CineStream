import { useState } from "react";
import { makePayment } from "../APIs/payment";
import "../style/payment.css";
//import {UseNavigate} from "react-router-dom";

export default function Payments() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 
  //const Navigate = UseNavigate();
  const handlePay = async (e) => {
    e.preventDefault(); 
    setError(""); 
    
    try {
      setLoading(true); 
      //await makePayment({ amount: 499 });
      alert("Payment Successful!");
      console.log("Payment processed",e.target.cardNumber.value );
      //Navigate("/");
    } catch (err) {
      
      setError(err.message || "Something went wrong. Please try again."); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="payment-container" role="main" aria-labelledby="payment-title">
      <h1 id="payment-title">Subscription</h1>
      <div style={{ padding:" 20px ", justifyContent: "center", maxWidth: "400px", margin: "0 auto" }}>
   
      <div className="plane-card">
        <h2>Premium Plane</h2>
        <p>Access all movies and exclusive content</p>
        <p><strong>Price:</strong> $4.99/month</p>
      </div>
      
      <form onSubmit={handlePay} aria-describedby="form-instruction">
        <p id="form-instruction">Please enter your payment details.</p>

        <div className="input-group">
          <label htmlFor="cardNumber">Card Number : </label>
          <input
            id="cardNumber"
            type="text"
            required
            aria-required="true"
            aria-label="16 digit card number"
            placeholder="0000 0000 0000 0000"
          />
        </div>
        {error && (
          <div 
            role="alert" 
            aria-live="assertive" 
            style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}
          >
            {error}
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading} 
          aria-busy={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
      </div>
    </div>
  );
}