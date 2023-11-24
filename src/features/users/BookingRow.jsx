import styled from "styled-components";
import { Link } from "react-router-dom";
import Table from "../../components/Table";

const Tour = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  & img {
    max-width: 100px;
    border-radius: 5px;
  }
  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-brand-50);
    opacity: 0;
    user-select: none;
    transition: all 0.3s;
  }

  &:hover {
    & > span {
      opacity: 1;
    }
  }
  font-size: 1rem;
  font-weight: 600;
`;

const Date = styled.div`
  font-weight: 600;
`;

const Status = styled.div``;

const Amount = styled.div`
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    date,
    slots,

    status,
    tours: { name: tourName, img, price, id: tourId },
  },
}) {
  return (
    <Table.Row>
      <Tour>
        <span>{tourName}</span>
        <Link to={`/tours/${tourId}`}>
          <img src={img} alt="" aria-hidden />
        </Link>
      </Tour>

      <Date>
        <span>{slots}</span>
      </Date>
      <Date>
        <span>{date}</span>
      </Date>

      <Status>{status}</Status>

      <Amount>${price}</Amount>
    </Table.Row>
  );
}

export default BookingRow;
