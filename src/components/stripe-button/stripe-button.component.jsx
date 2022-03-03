import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KZHqlLrmT8onkmGa5EA95R5Bo82MUGmJ8en72vmOFd6iVR48hR7xhyOJ8o3fmj4efiO0S4K7jeretQxYMxepPsf00sX4Hm3R1";

  const onToken = (token) => {
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      currency="EUR"
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
