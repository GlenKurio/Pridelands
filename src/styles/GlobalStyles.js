import { createGlobalStyle } from "styled-components";
import { devices } from "../components/layout/Queries";

const GlobalStyles = createGlobalStyle`
:root {
    font-family: 'Cabin', sans-serif;
  line-height: 1.5;
  font-weight: 400;

  /* color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424; */

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  /*------ VARIABLES -------  */
  /* COLORS */
  /* FONT-SIZE */
  --fs-h1: clamp(3.5rem, 8vw + 1rem, 8rem);
  --fs-h2: 6.854rem;
  --fs-h3: 4.236rem;
  --fs-h4: 2.618rem;
  --fs-h5: 1.618rem;
  --fs-h6: 1rem;
  --fs-p: 1rem;
  --fs-psm: 0.618rem;
  --fs-pxs: 0.382rem;
  
  /* SHADOW */
  /* BORDER RADIUS */

}

/* RESET */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
`;

export default GlobalStyles;
