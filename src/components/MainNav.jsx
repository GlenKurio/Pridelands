import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { UserIcon } from "@heroicons/react/24/solid";
// import { UserIcon as OutlineUserIcon } from "@heroicons/react/24/outline";
import Navigation from "./Navigation";

const StyledNavLinkLogo = styled(NavLink)`
  display: flex;
  place-content: center;
  padding: 1rem;
  img {
    max-width: 50px;
  }
  img:nth-child(2) {
    display: none;
  }

  &:hover img:nth-child(1) {
    display: none;
  }
  &:hover img:nth-child(2) {
    display: block;
  }
`;

// const StyledUserIcon = styled(UserIcon)`
//   width: 32px;
//   height: 32px;
// `;

// const StyledOutlineUserIcon = styled(OutlineUserIcon)`
//   width: 32px;
//   height: 32px;
// `;

// const StyledNavLinkIcon = styled(NavLink)`
//   font-size: var(--fs-h5);
//   text-decoration: none;
//   color: var(--color-brand-500);
//   display: flex;
//   place-content: center;
//   padding: 1rem;

//   svg:nth-child(2) {
//     display: none;
//   }

//   &:hover svg:nth-child(1) {
//     display: none;
//   }
//   &:hover svg:nth-child(2) {
//     display: block;
//     color: var(--color-add-green-2);
//   }
// `;

const StyledLinkContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const StyledNav = styled.nav`
  z-index: 10;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
`;
function MainNav() {
  return (
    <StyledNav>
      <StyledLinkContainer>
        <li>
          <StyledNavLinkLogo to="/">
            <img src="/public/logos/pride-icon-x2.webp" alt="" />
            <img src="/public/logos/pride-logo-green.webp" alt="" />
          </StyledNavLinkLogo>
        </li>
        <Navigation />
      </StyledLinkContainer>
    </StyledNav>
  );
}

export default MainNav;
{
  /* <li>
          <StyledNavLinkIcon to="/account">
            <StyledOutlineUserIcon /> <StyledUserIcon />
          </StyledNavLinkIcon>
        </li> */
}
