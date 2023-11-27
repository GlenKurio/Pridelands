import Calendar from "react-calendar";
import "./Calendar.css";
import { useState, useContext } from "react";
import styled from "styled-components";
import { isSameDay, parseISO, addDays } from "date-fns";
import { CalendarContext } from "../../contexts/calendar.context";
import { HiPlus, HiMinus } from "react-icons/hi2";
import { toast } from "react-hot-toast";
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

const Price = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  background-image: linear-gradient(
    to right,
    var(--color-brand-500),
    var(--color-add-orange)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 2rem 0;
`;
const Seats = styled.div`
  & span:nth-child(1) {
    display: block;
    margin-bottom: 2rem;
  }

  & span:nth-child(2) {
    width: 50px;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  & button {
    padding: 1rem;
    border: none;
    background-color: var(--color-brand-500);
    border-radius: var(--border-radius-md);
    cursor: pointer;
    transition: all 0.2s;
    font-size: 2rem;
    display: flex;
    place-content: center;
    color: var(--color-brand-50);
    &:hover {
      background-color: var(--color-add-green-2);
    }

    &:active {
      scale: 0.9;
    }
  }
  font-size: 2.5rem;
  font-weight: bold;
  background-image: linear-gradient(
    to right,
    var(--color-brand-500),
    var(--color-add-orange)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 2rem 0;
`;

function TourCalendar({ availability, duration, price }) {
  console.log(availability);
  const { setSelecDate, setSelecSlots, setSelecSeats, setSelecTotal } =
    useContext(CalendarContext);
  // const { available_date, slots } = availability;
  const [selDate, setSelDate] = useState();
  const [selectedSlots, setSelectedSlots] = useState(null);
  const [seats, setSeats] = useState(1);
  const [total, setTotal] = useState(price);
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

  function handleIncrease() {
    if (!selDate || !selectedSlots)
      return toast("First you need to select a date", {
        icon: "🙂",
      });
    if (+seats >= +selectedSlots)
      return toast(
        "Looks like we don`t have anough seats on selected date. Try Another one",
        {
          icon: "🤔",
        }
      );
    setSeats(+seats + 1);
    setSelecSeats(seats);
    setTotal(+seats * (+price + +price));
    setSelecTotal(total);
  }
  function handleDecrease() {
    if (!selDate)
      return toast("First you need to select a date", {
        icon: "🙂",
      });
    if (seats <= 1)
      return toast("Are you sure about that?", {
        icon: "🤨",
      });
    setSeats(+seats - 1);
    setSelecSeats(seats);
    setTotal(+seats * +price - +price);
    setSelecTotal(total);
  }
  return (
    <>
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
                  <span className="red">
                    No Available Seats for this date 🙌
                  </span>
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
      <Seats>
        {" "}
        <span>How Many Seats?</span>
        <div>
          <button onClick={handleDecrease}>
            <HiMinus />
          </button>
          <span>{seats}</span>

          <button onClick={handleIncrease}>
            <HiPlus />
          </button>
        </div>
      </Seats>
      <Price>Total: ${total} </Price>
    </>
  );
}

export default TourCalendar;
