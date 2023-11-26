import { useBookings } from "./useBookings";
import Table from "../../components/ResponsiveTable";
import styled from "styled-components";
import ResBookingRow from "./ResRow";
import Heading from "../../components/atoms/Heading";
const Container = styled.div`
  min-width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function ResBookings() {
  const { isLoading, bookings } = useBookings();
  console.log(bookings);
  if (isLoading) return <div>Loading Bookings</div>;

  return (
    <Container>
      <Heading type="h5" as="h3">
        Your Bookings
      </Heading>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Th>Tour</Table.Th>
            <Table.Th>Seats Booked</Table.Th>
            <Table.Th>Start Date</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Amount</Table.Th>
          </Table.Row>
        </Table.Head>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <ResBookingRow key={booking.id} booking={booking}></ResBookingRow>
          )}
        ></Table.Body>
      </Table>
    </Container>
  );
}

export default ResBookings;
