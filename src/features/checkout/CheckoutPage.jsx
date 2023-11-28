import styled from "styled-components";
import OrderDetails from "./OrderDetails";
import { devices } from "../../components/layout/Queries";
import { useUser } from "../auth/useUser";
import Heading from "../../components/atoms/Heading";
import Spinner from "../../components/atoms/Spinner";
// import PaymentForm from "../../components/PaymentForm";

const CheckoutContainer = styled.div`
  margin: 6rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
`;

function CheckoutPage() {
  const { user, isLoading } = useUser();
  if (isLoading) return <Spinner />;
  return (
    <CheckoutContainer>
      <Heading as="h1" type="h5" color="gradient">
        Here is your order
      </Heading>
      <OrderDetails user={user} />
    </CheckoutContainer>
  );
}

export default CheckoutPage;
