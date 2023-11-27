import { createContext, useState } from "react";

export const CalendarContext = createContext({
  selecDate: null,
  setSelecDate: () => null,
  selecSlots: null,
  setSelecSlots: () => null,
});

export function CalendarProvider({ children }) {
  const [selecDate, setSelecDate] = useState(null);
  const [selecSlots, setSelecSlots] = useState(null);
  const value = { selecDate, setSelecDate, selecSlots, setSelecSlots };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}
