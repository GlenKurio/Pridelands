import styled from "styled-components";
import { Link } from "react-router-dom";
import Table from "../../components/ResponsiveTable";
import { Td } from "../../components/ResponsiveTable";

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
    z-index: 10;
  }

  &:hover {
    & > span {
      opacity: 1;
    }
  }
  font-size: 1rem;
  font-weight: 600;
`;

const Date = styled(Td)`
  font-weight: 600;
`;

const Status = styled(Td)``;

const Amount = styled(Td)`
  font-weight: 500;
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
  return (
    <Table.Row>
      <Table.Data colName={Tour}>
        <Tour>
          <span>{tourName}</span>
          <Link to={`/tours/${tourId}`}>
            <img src={img} alt="" aria-hidden />
          </Link>
        </Tour>
      </Table.Data>

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

export default ResBookingRow;
