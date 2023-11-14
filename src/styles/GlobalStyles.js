import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    font-family: 'Cabin', sans-serif;

  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  /*------ VARIABLES -------  */

/* COLORS */

&, &.light-mode {

    --color-brand-50: #fef5e9;
    --color-brand-100: #fbe0be;
--color-brand-200: #fad5a9;
--color-brand-300: #f6b668;
--color-brand-400: #f3a13d;
--color-brand-500: rgb(242, 151, 39);


--color-gray-50: #ffffff;
--color-gray-100: #eae9e7;
--color-gray-500: #c1bcb7;
--color-gray-600: #988f88;
--color-gray-700: #6f6258;
--color-gray-800: #463528;
--color-gray-900: #311e10;
}

--color-neutral-50: #d3edeb;
--color-neutral-200: #7acac2;
--color-neutral-400: #4eb8ad;
--color-neutral-500: #22a699;
--color-neutral-700: #18746b;
--color-neutral-900: #0e423d;

--color-destructive-50: #fcdbd8;
--color-destructive-200: #f7948b;
--color-destructive-400: #f57064;
--color-destructive-500: #f24c3d;
--color-destructive-700: #c23d31;
--color-destructive-900: #912e25;

--color-warning-50: #fbecbd;
--color-warning-200: #f7d87a;
--color-warning-400: #f5cb4e;
--color-warning-500: #f2be22;
--color-warning-700: #c2981b;
--color-warning-900: #917214;

--color-success-50: #d8f4cd;
--color-success-200: #b2e89a;
--color-success-400: #98e179;
--color-success-500: #7ed957;
--color-success-700: #65ae46;
--color-success-900: #4c8234;




// used for cards:

--color-add-green-1: rgb(22, 219, 147);
--color-add-green-2: #136f63;
--color-add-blue-1: rgb(151, 209, 251);
--color-add-blue-2: rgb(5, 181, 221);
--color-add-orange: rgb(221, 96, 49);


  /* FONT-SIZE */
  --fs-h1: clamp(3rem, 8vw + 1rem, 10.089rem);
  --fs-h2: clamp(2.5rem, 6vw + 1rem, 6.854rem);
  --fs-h3: clamp(2rem, 5vw + 1rem, 4.236rem);
  --fs-h4: clamp(1.5rem, 4vw + 1rem, 2.618rem);
  --fs-h5: clamp(1.2rem, 2vw + 1rem, 1.918rem);
  --fs-h6: 1rem;
  --fs-p:  1rem;
  --fs-psm: 0.618rem;
  --fs-pxs: 0.382rem;
  
  /* SHADOW */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  /* BORDER RADIUS */
  --border-radius-xs: 3px;
  --border-radius-sm: 6px;
  --border-radius-md: 9px;
  --border-radius-lg: 12px;
  --border-radius-xl: 15px;
  --border-radius-2xl: 19px;
  --border-radius-full: 150px;
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
  max-width: 1440px;
  
 
  margin: 0 auto;
  text-align: center;
}
`;

export default GlobalStyles;
