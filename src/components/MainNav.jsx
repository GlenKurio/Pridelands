import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/account">Account</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
