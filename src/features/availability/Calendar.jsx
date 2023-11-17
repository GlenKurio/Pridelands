import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { subDays, addDays } from "date-fns";

const DateRangePicker = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [highlightedDates, setHighlightedDates] = useState([]);
  //   const [excludedDates, setExcludedDates] = useState([]);

  useEffect(() => {
    // Simulated asynchronous fetching of dates from an external source (e.g., API call)
    // Replace this with your actual fetching logic from a database or an API
    const fetchDatesFromDatabase = async () => {
      try {
        // Simulated data fetching (replace with your actual data fetching logic)
        const fetchedHighlightedDates = [
          new Date(new Date().getFullYear(), 10, 17),
          new Date(new Date().getFullYear(), 10, 19),
          new Date(new Date().getFullYear(), 10, 20),
          new Date(new Date().getFullYear(), 10, 22),
          new Date(new Date().getFullYear(), 10, 25),
          // ... Fetch highlighted dates from the database
        ];

        // const fetchedExcludedDates = [
        //   new Date(new Date().getFullYear(), 10, 20),
        //   new Date(new Date().getFullYear(), 10, 25),
        //   // ... Fetch excluded dates from the database
        // ];

        // Update state with fetched dates
        setHighlightedDates(fetchedHighlightedDates);
        // setExcludedDates(fetchedExcludedDates);
      } catch (error) {
        console.error("Error fetching dates:", error);
        // Handle error fetching data
      }
    };

    // Call the function to fetch dates
    fetchDatesFromDatabase();
  }, []); // Ensure this effect runs only once upon initial mount

  const handleDateChange = (update) => {
    const pickedStartDate = update[0];
    const pickedEndDate = new Date(pickedStartDate);
    pickedEndDate.setDate(pickedStartDate.getDate() + 5);

    setDateRange([pickedStartDate, pickedEndDate]);
  };

  const isDateExcluded = (date) => {
    return highlightedDates.some(
      (highlightedDate) =>
        highlightedDate.toDateString() === date.toDateString()
    );
  };

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        handleDateChange(update);
      }}
      highlightDates={highlightedDates}
      //   excludeDates={excludedDates}
      filterDate={(date) => isDateExcluded(date)}
      withPortal
    />
  );
};

export default DateRangePicker;
