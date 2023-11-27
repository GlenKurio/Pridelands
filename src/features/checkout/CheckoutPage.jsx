import styled from "styled-components";
import OrderDetails from "./OrderDetails";
import CheckoutForm from "./CheckoutForm";
import { devices } from "../../components/layout/Queries";
import PaymentForm from "../../components/PaymentForm";

const CheckoutContainer = styled.div`
  margin: 6rem 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr;

  gap: 4rem;

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
`;

function CheckoutPage() {
  return (
    <CheckoutContainer>
      <CheckoutForm />
      <OrderDetails />
      <PaymentForm />
    </CheckoutContainer>
  );
}

export default CheckoutPage;
