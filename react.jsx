import React, { useState } from 'react';

function SubscriptionForm() {
  const [subscriptionPrice, setSubscriptionPrice] = useState('₹149'); // Initial price value

  // Function to handle radio button selection
  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;

    // Update the subscription price based on the selected option
    switch (selectedOption) {
      case 'option1':
        setSubscriptionPrice('₹179');
        break;
      case 'option2':
        setSubscriptionPrice('₹149');
        break;
      case 'option3':
        setSubscriptionPrice('₹99');
        break;
      default:
        setSubscriptionPrice('₹149');
    }
  };

  return (
    <div className="top-options">
      {/* Your existing code */}
      <div className="container">
        <div className="below">
          <div className="circle">
            <p className="inner-text">1</p>
          </div>
          <p className="text">Sign Up</p>
        </div>
        <div className="below">
          <div className="circle">
            <p className="inner-text">2</p>
          </div>
          <p className="text">Subscribe</p>
        </div>
      </div>
      <p className="react-head">Select your subscription plan</p>
      <form>
        {/* Your existing radio button inputs */}
        <div className="form-con">
          <div className="plans">
            <label className="first-opt">
              <input type="radio" disabled />12 Months Subscription
              <p className="form-price">Total ₹99<br />₹8 /mo</p>
            </label>
          </div>
          <div className="plans1">
            <label className="second-opt">
              <input
                id="option1"
                type="radio"
                name="option"
                value="option1"
                onClick={handleOptionChange}
              />
              12 Months Subscription
              <p className="form-price">Total ₹179<br />₹15 /mo</p>
            </label>
          </div>
          <div className="plans2">
            <label className="third-opt">
              <input
                id="option2"
                type="radio"
                name="option"
                value="option2"
                onClick={handleOptionChange}
              />
              6 Months Subscription
              <p className="form-price">Total ₹149<br />₹25 /mo</p>
            </label>
          </div>
          <div className="plans2">
            <label className="fourth-opt">
              <input
                id="option3"
                type="radio"
                name="option"
                value="option3"
                onClick={handleOptionChange}
              />
              3 Months Subscription
              <p className="form-price">Total ₹99<br />₹33 /mo</p>
            </label>
          </div>
          <div className="plans3"></div>
          <div className="sub-fee">
            <p>Subscription Fee</p>
            <p className="sub-text">{subscriptionPrice}</p>
          </div>
          <div className="plans4">
            <p className="final-opt">
              Limited time Offer<br />Offer valid till 25th March 2023
              <p className="form-price">-₹18,401</p>
            </p>
          </div>
          <div className="tot">
            <p>Total (incl. of 18% GST)</p>
            <p id="final-amt" className="tax">{subscriptionPrice}</p>
</div>
<div className="button-container">
  <input type="submit" value="CANCEL" className="butn1" />
  <input type="submit" value="PROCEED TO PAY" className="butn2" />
</div>
<div className="razro">
  <img src="/images/Frame 12537.jpg" />
</div>
</div>
</form>
</div>
 
);
}

export default SubscriptionForm;

