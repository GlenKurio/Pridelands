import Calendar from "react-calendar";
import "./Calendar.css";
import { useState, useContext } from "react";
import styled from "styled-components";
import { isSameDay, parseISO, addDays } from "date-fns";
import { CalendarContext } from "../../contexts/calendar.context";

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SlotsContainer = styled.div`
  max-width: 300px;
  & p {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0.5rem;
    text-align: left;
    & span {
      font-weight: 800;
    }
  }

  & .red {
    color: var(--color-destructive-500);
  }
`;

const CalendarLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 1rem;
  font-weight: 900;
  font-size: 0.65rem;
  letter-spacing: 1px;
  & span {
    border-radius: 10px;
    padding: 0.5rem;
    display: inline-block;
  }
  /* & span:nth-child(1) {
    background-color: #ffff76;
  } */
  & span:nth-child(1) {
    background-color: #f0f0f0;
    color: #b2afaf;
  }
  & span:nth-child(2) {
    background-color: var(--color-brand-500);
    color: white;
  }
  & span:nth-child(3) {
    background-color: var(--color-add-green-1);
    color: white;
  }
`;

function TourCalendar({ availability, duration, setSeats }) {
  console.log(availability);
  const { setSelecDate, setSelecSlots } = useContext(CalendarContext);
  const { available_date, slots } = availability;
  const [selDate, setSelDate] = useState();
  const [selectedSlots, setSelectedSlots] = useState(null);
  const endDate = addDays(selDate, duration).toDateString();

  function handleDateChange(value) {
    setSelDate(value);
    setSelecDate(value);

    const selectedAvailability = availability.find((avDate) =>
      isSameDay(parseISO(avDate.available_date), value)
    );
    const selSlots = selectedAvailability.slots;
    console.log(selectedAvailability);
    if (selSlots) {
      setSelectedSlots(selSlots);
      setSelecSlots(selSlots);
    } else {
      setSelectedSlots(null);
      setSelecSlots(null);
    }
  }

  const availableDates = availability.map((avDate) => avDate.available_date);
  // console.log("available Dates:", availableDates);
  const TileDisabled = ({ date }) => {
    const isDateDisabled = !availableDates.some((availableDate) =>
      isSameDay(parseISO(availableDate), date)
    );
    const hasZeroSlots = availability.some(
      (avDate) =>
        isSameDay(parseISO(avDate.available_date), date) && avDate.slots === 0
    );
    return isDateDisabled || hasZeroSlots;
  };
  const tileClassName = ({ date }) => {
    const isDateAvailable = availableDates.some((availableDate) =>
      isSameDay(parseISO(availableDate), date)
    );
    const isSelectedDate = isSameDay(date, selDate);
    if (isDateAvailable) {
      return isSelectedDate ? "available-date selected" : "available-date";
    } else {
      return null;
    }
  };

  return (
    <CalendarContainer>
      <CalendarLegend>
        <span>Unavailable</span>
        <span>Selected</span>
        <span>Available</span>
      </CalendarLegend>
      <Calendar
        onChange={handleDateChange}
        defaultValue={selDate}
        // selectRange={true}
        minDate={new Date()}
        tileDisabled={TileDisabled}
        tileClassName={tileClassName}
      />
      <SlotsContainer>
        {selDate ? (
          <>
            <p>
              <span>Start: </span>
              {selDate.toDateString()}
            </p>
            <p>
              <span>End: </span>
              {endDate}
            </p>
            <p>
              {selectedSlots ? (
                <span>Available seats: {selectedSlots} </span>
              ) : (
                <span className="red">No Available Seats for this date 🙌</span>
              )}
            </p>
          </>
        ) : (
          <>
            <p>
              <span>No date selected</span>
            </p>
            <p>
              <span>Select date to see available seats</span>
            </p>
          </>
        )}
      </SlotsContainer>
    </CalendarContainer>
  );
}

export default TourCalendar;
