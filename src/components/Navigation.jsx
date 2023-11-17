import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const StyledNavigation = styled.div`
  & .navigation--checkbox {
    display: none;
  }

  & .navigation--button {
    background-color: var(--color-brand-50);
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 200;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);

    text-align: center;
    cursor: pointer;
  }

  & .navigation--background {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    position: fixed;
    top: 2.5rem;
    right: 2.5rem;
    background-image: radial-gradient(
      rgba(242, 151, 39, 1),
      rgba(221, 96, 49, 1)
    );
    z-index: 100;

    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
    /* transform: scale(90); */
  }

  & .navigation--nav {
    height: 100vh;
    /* width: 100%; */
    position: fixed;
    top: 0;
    right: 0;
    z-index: 150;

    opacity: 0;
    width: 0;

    transition: all 0.5s;
  }

  & .navigation--list {
    list-style: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  }

  & .navigation--item {
    margin: 1rem;
  }

  & .navigation--link {
    &:link,
    &:visited {
      display: inline-block;

      font-size: 2rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: var(--color-brand-50);
      text-transform: uppercase;
      text-decoration: none;

      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        var(--color-brand-50) 50%
      );
      background-size: 250%;
      transition: all 0.5s;

      span {
        margin-right: 0.75rem;
        display: inline-block;
      }
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: var(--color-brand-500);
      transform: translateX(1rem);
    }
  }

  & .navigation--checkbox:checked ~ .navigation--background {
    transform: scale(90);
  }
  & .navigation--checkbox:checked ~ .navigation--nav {
    opacity: 1;
    width: 100%;
  }
  & .navigation--icon {
    position: relative;
    margin-top: 1.5rem;

    &,
    &::before,
    &::after {
      width: 1.5rem;
      height: 2px;
      background-color: var(--color-add-green-2);
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.5rem;
    }
    &::after {
      top: 0.5rem;
    }
  }

  & .navigation--button:hover .navigation--icon::before {
    top: -0.6rem;
  }
  & .navigation--button:hover .navigation--icon::after {
    top: 0.6rem;
  }

  & .navigation--checkbox:checked + .navigation--button .navigation--icon {
    background-color: transparent;
  }
  &
    .navigation--checkbox:checked
    + .navigation--button
    .navigation--icon::before {
    top: 0;
    transform: rotate(135deg);
  }
  &
    .navigation--checkbox:checked
    + .navigation--button
    .navigation--icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;

function Navigation() {
  const [isChecked, setIsChecked] = useState(false);

  function openClick() {
    setIsChecked(!isChecked);
  }

  function handleLinkClick() {
    setIsChecked(false);
  }
  return (
    <StyledNavigation>
      <input
        type="checkbox"
        id="navi-toggle"
        className="navigation--checkbox"
        checked={isChecked}
      />
      <label
        htmlFor="navi-toggle"
        className="navigation--button"
        onClick={openClick}
      >
        <span className="navigation--icon"></span>
      </label>
      <div className="navigation--background">&nbsp;</div>
      <nav className="navigation--nav">
        <ul className="navigation--list">
          <li className="navigation--item">
            <NavLink
              to="/"
              className="navigation--link"
              onClick={handleLinkClick}
            >
              <span>01</span>About Pridelands
            </NavLink>
          </li>
          <li className="navigation--item">
            <NavLink
              to="/tours"
              className="navigation--link"
              onClick={handleLinkClick}
            >
              <span>02</span>Tours
            </NavLink>
          </li>
          <li className="navigation--item">
            <NavLink
              to="/account"
              className="navigation--link"
              onClick={handleLinkClick}
            >
              <span>03</span>Account
            </NavLink>
          </li>
          <li className="navigation--item">
            <NavLink
              to="/contact"
              className="navigation--link"
              onClick={handleLinkClick}
            >
              <span>04</span>Contact
            </NavLink>
          </li>
          {/* <li className="navigation--item">
            <a href="#" className="navigation--link">
              <span>05</span>Book Now
            </a>
          </li> */}
        </ul>
      </nav>
    </StyledNavigation>
  );
}

export default Navigation;
