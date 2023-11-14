const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `only screen and (max-width: ${sizes.mobileS})`,
  mobileM: `only screen and (max-width: ${sizes.mobileM})`,
  mobileL: `only screen and (max-width: ${sizes.mobileL})`,
  tablet: `only screen and (max-width: ${sizes.tablet})`,
  laptop: `only screen and (max-width: ${sizes.laptop})`,
  laptopL: `only screen and (max-width: ${sizes.laptopL})`,
  desktop: `only screen and (max-width: ${sizes.desktop})`,
};
