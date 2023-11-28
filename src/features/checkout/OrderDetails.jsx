import { useContext } from "react";
import { useTours } from "../tours/useTours";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CalendarContext } from "../../contexts/calendar.context";
import { devices } from "../../components/layout/Queries";
import Heading from "../../components/atoms/Heading";
import Button from "../../components/atoms/Button";

import { usePlaceBooking } from "./useBookings";
import StyledLink from "../../components/atoms/StyledLink";
import Spinner from "../../components/atoms/Spinner";
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
  background-color: var(--color-brand-200);
  color: var(--color-gray-900);
  padding: 1rem;
  border-radius: var(--border-radius-md);

  @media ${devices.tablet} {
    margin: 0 auto;
    width: 100%;
  }

  & div:last-child {
    margin-top: 1rem;
    border-top: 2px solid var(--color-gray-900);
    & span:nth-child(1) {
      font-size: 1.75rem;
    }

    & span:nth-child(2) {
      font-size: 1.5rem;
    }
  }
`;
const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span:nth-child(1) {
    font-size: 1.25rem;
    font-weight: 900;
  }
  & span:nth-child(2) {
    font-size: 1.15rem;
  }
`;

const HeadingContainer = styled.div`
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--color-gray-900);
`;
function OrderDetails({ user }) {
  const { selecDate, selecSeats, selecTotal } = useContext(CalendarContext);
  const { toursAll, isLoading } = useTours();
  const { id: tourid } = useParams();
  const { placeBooking, isPlacing } = usePlaceBooking();
  if (!selecDate || !selecTotal)
    return (
      <div>
        <StyledLink to={`/tours/${tourid}`}>Back To Tour</StyledLink>
      </div>
    );
  if (!selecDate || selecTotal) if (isLoading) return <Spinner />;

  const { name, price, group, level, guides, duration } = toursAll.find(
    (tour) => tour.id == tourid
  );
  const { id: userId } = user;

  const orderDetails = {
    user: userId,
    slots: selecSeats,
    tourId: tourid,
    date: selecDate.toDateString(),
    total: selecTotal,
  };

  function handleSubmit() {
    placeBooking({ ...orderDetails });
  }
  return (
    <DetailsContainer>
      <HeadingContainer>
        <Heading type="h5" as="h3">
          Order Details
        </Heading>
      </HeadingContainer>
      <DetailsRow>
        <span>Tour:</span>
        <span>{name}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Group:</span>
        <span>{group}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Difficulty:</span>
        <span>{level}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Guides:</span>
        <span>{guides}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Duration (days):</span>
        <span>{duration}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Start date:</span>
        <span>{selecDate.toDateString()}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Price for 1 seat:</span>
        <span>${price}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Seats selected:</span>
        <span>{selecSeats}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Total:</span>
        <span>${selecTotal}</span>
      </DetailsRow>
      <Button disabled={isPlacing} onClick={handleSubmit}>
        Place order
      </Button>
    </DetailsContainer>
  );
}

export default OrderDetails;
