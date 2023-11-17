import styled from "styled-components";
import { Link } from "react-router-dom";
import Paragraph from "../components/atoms/Paragraph";
import { devices } from "./layout/Queries";

const FooterContainer = styled.footer`
  margin: 6rem 1rem 1rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: var(--color-brand-500);
  padding: 2rem 1rem;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  padding: 1rem;
  & img {
    max-width: 50px;
  }
`;

const FooterLinks = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  & li a {
    text-decoration: none;
    color: var(--color-brand-50);
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 0.3s;
    font-weight: 800;
    &:hover {
      color: var(--color-add-green-2);
    }
  }
  @media ${devices.tablet} {
    flex-direction: column;
  }
  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

const Creds = styled.div`
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <MainContent>
        <LogoContainer>
          <img src="/logos/pride-logo-green.webp" alt="" />
        </LogoContainer>
        <FooterLinks>
          <li>
            <Link>Company</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
          <li>
            <Link>Careers</Link>
          </li>
          <li>
            <Link>Privacy</Link>
          </li>
          <li>
            <Link>Terms</Link>
          </li>
        </FooterLinks>
      </MainContent>
      <Creds>
        <Paragraph size="pxs" color="black">
          Developed By Oleh Minko for Pridelands &copy; safari tours in 2023
        </Paragraph>
      </Creds>
    </FooterContainer>
  );
}

export default Footer;
