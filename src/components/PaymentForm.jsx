import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "./atoms/Button";
import { toast } from "react-hot-toast";

import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 400px;
  margin: 0 auto;
  background-color: var(--color-brand-200);
  padding: 2rem;
  border-radius: var(--border-radius-md);
`;

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  async function paymentHandler(e) {
    e.preventDefault();

    if (!stripe || !elements) return;

    // Payment Intent
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ amount: 1000 }),
    }).then((res) => res.json());

    console.log(response);
    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Oleh Minko",
        },
      },
    });

    if (paymentResult.error) {
      toast.error(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("Successfully paid!");
      }
    }
  }

  return (
    <Container onSubmit={paymentHandler}>
      <h2>Credit Card Payment</h2>
      <CardElement />
      <Button>Pay</Button>
    </Container>
  );
}

export default PaymentForm;
