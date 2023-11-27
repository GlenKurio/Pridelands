import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "./atoms/Button";

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
  }

  return (
    <Container>
      <h2>Credit Card Payment</h2>
      <CardElement />
      <Button>Pay</Button>
    </Container>
  );
}

export default PaymentForm;
