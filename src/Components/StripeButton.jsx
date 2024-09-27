import React, { useState } from 'react';

// Make sure to include the Stripe.js script in your HTML file or import it directly in your React component.
const StripeButton = () => {
  const [stripe, setStripe] = useState(null);

  // Load Stripe when component mounts
  React.useEffect(() => {
    // Initialize Stripe with your public key
    setStripe(window.Stripe('your_stripe_public_key'));
  }, []);

  const handleCheckout = async () => {
    // Make the API call to your backend to create the payment intent
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000, currency: 'usd' }), // e.g. $10
    });
    const { clientSecret } = await response.json();

    // Confirm card payment with Stripe
    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: {
          number: '4242424242424242', // test card
          exp_month: 12,
          exp_year: 2024,
          cvc: '123',
        },
      },
    });

    if (error) {
      console.error(error);
      alert('Payment failed: ' + error.message);
    } else {
      alert('Payment Successful!');
    }
  };

  return (
    <div>
      <button id="checkout-button" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default StripeButton;
