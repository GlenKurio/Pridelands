import styled from "styled-components";
import { Link } from "react-router-dom";
import Table from "../../components/ResponsiveTable";

import { devices } from "../../components/layout/Queries";

const Tour = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  & img {
    max-width: 100px;
    border-radius: 5px;
  }
  & span {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-brand-50);
    opacity: 0;
    user-select: none;
    transition: all 0.3s;
    z-index: 10;
  }

  &:hover {
    & span {
      opacity: 1;
    }
  }
  font-size: 1rem;
  font-weight: 600;
`;

const Date = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const Status = styled.div`
  font-size: 1rem;
`;

const Amount = styled.div`
  font-weight: 800;
  font-size: 1rem;
`;

const Theader = styled.p`
  font-size: 1.15rem;
  font-weight: 800;
  display: none;

  @media ${devices.tablet} {
    display: block;
  }
`;

function ResBookingRow({
  booking: {
    id: bookingId,
    created_at,
    date,
    slots,

    status,
    tours: { name: tourName, img, price, id: tourId },
  },
}) {
  const total = price * slots;
  return (
    <Table.Row>
      <Table.Data>
        <Theader>Tour</Theader>
        <Tour>
          <Link to={`/tours/${tourId}`}>
            <span>{tourName}</span>
            <img src={img} alt="" aria-hidden />
          </Link>
        </Tour>
      </Table.Data>
      <Table.Data>
        <Theader>Seats Booked</Theader>
        <Date>
          <span>{slots}</span>
        </Date>
      </Table.Data>
      <Table.Data>
        <Theader>StartDate</Theader>
        <Date>
          <span>{date}</span>
        </Date>
      </Table.Data>
      <Table.Data>
        <Theader>Status</Theader>
        <Status>{status}</Status>
      </Table.Data>
      <Table.Data>
        <Theader>Total Amount</Theader>
        <Amount>${total}</Amount>
      </Table.Data>
    </Table.Row>
  );
}

export default ResBookingRow;
