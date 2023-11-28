import { createContext, useState } from "react";

export const CalendarContext = createContext({
  selecDate: null,
  setSelecDate: () => null,
  selecSlots: null,
  setSelecSlots: () => null,
  selecSeats: null,
  setSelecSeats: () => null,
  selecTotal: null,
  setSelecTotal: () => null,
});

export function CalendarProvider({ children }) {
  const [selecDate, setSelecDate] = useState(null);
  const [selecSlots, setSelecSlots] = useState(null);
  const [selecSeats, setSelecSeats] = useState(1);
  const [selecTotal, setSelecTotal] = useState(null);
  const value = {
    selecDate,
    setSelecDate,
    selecSlots,
    setSelecSlots,
    selecSeats,
    setSelecSeats,
    selecTotal,
    setSelecTotal,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}
