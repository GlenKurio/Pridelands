import styled from "styled-components";
import Heading from "./atoms/Heading";
import { devices } from "./layout/Queries";
import Button from "./atoms/Button";

const StyledHeader = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to right bottom,
      rgba(234, 153, 123, 0.2),
      rgba(250, 193, 122, 0.3)
    ),
    url("../../public/bg/hero-lion-2.webp");
  background-size: cover;
  background-position: top;

  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  color: var(--color-brand-50);
  user-select: none;
  margin: 1rem;

  @media ${devices.tablet} {
    margin: 0;
    background-image: linear-gradient(
        to right bottom,
        rgba(234, 153, 123, 0.2),
        rgba(250, 193, 122, 0.3)
      ),
      url("../../public/bg/hero-lion-mobile.png");
    background-position: center;
  }
`;

const StyledheadingContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 3rem;
  @media ${devices.tablet} {
    margin-top: 12rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledheadingContainer>
        <Heading type="h1" as="h1">
          Pridelands
        </Heading>
        <Heading type="h5" as="h2">
          Is where life happens
        </Heading>
      </StyledheadingContainer>
      <Button type="primary" size="lg">
        Discover our tours
      </Button>
    </StyledHeader>
  );
}

export default Header;
