import { useState } from "react";
import { makePayment } from "../APIs/payment";

export default function Payments() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 

  const handlePay = async (e) => {
    e.preventDefault(); 
    setError(""); 
    
    try {
      setLoading(true); 
      await makePayment({ amount: 499 });
      alert("Payment Successful!");
    } catch (err) {
      
      setError(err.message || "Something went wrong. Please try again."); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="payment-container" role="main" aria-labelledby="payment-title">
    <div style={{ padding:" 20px ", justifyContent: "center", maxWidth: "400px", margin: "0 auto" }}>
      <h1 id="payment-title">Subscription Payment</h1>
      
      <form onSubmit={handlePay} aria-describedby="form-instruction">
        <p id="form-instruction">Please enter your payment details below to continue.</p>

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
          style={{ marginTop: "20px" }}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
      </div>
    </div>
  );
}