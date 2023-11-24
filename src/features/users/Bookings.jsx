import styled from "styled-components";
import { useBookings } from "./useBookings";
import Table from "../../components/Table";
import BookingRow from "./BookingRow";
const Container = styled.div`
  min-width: 100%;
`;

function Bookings() {
  const { isLoading, bookings } = useBookings();
  console.log(bookings);
  if (isLoading) return <div>Loading Bookings</div>;
  return (
    <Container>
      <h1>Bookings will be here</h1>
      <Table columns="repeat(auto-fit, minmax(100px, 1fr))">
        <Table.Header>
          <div>Tour</div>
          <div>Seats</div>
          <div>Start Date</div>
          <div>Status</div>
          <div>Amount</div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        ></Table.Body>

        <Table.Footer>
          <h3>Table Footer</h3>
        </Table.Footer>
      </Table>
    </Container>
  );
}

export default Bookings;
