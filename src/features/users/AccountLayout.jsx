import LogOut from "../auth/LogOut";
import styled from "styled-components";

import { Outlet, Link } from "react-router-dom";
import { useUserData } from "./useUserData";
import Heading from "../../components/atoms/Heading";
import Spinner from "../../components/atoms/Spinner";

const Account = styled.div`
  min-height: 100vh;
  padding-top: 6rem;
  margin: 1rem;

  & nav {
    & ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      gap: 2rem;
      padding: 1rem 0;
      margin: 2rem 0;

      border-bottom: 1px solid var(--color-brand-500);
      border-top: 1px solid var(--color-brand-500);

      & li a {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        padding: 1rem 2rem;

        display: inline-block;
        background: var(--color-gradient-orange);
        color: var(--color-brand-50);
        border-radius: var(--border-radius-sm);

        &:hover {
          background: var(--color-gradient-green);
        }
      }
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & figure {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    & img {
      max-width: 100px;
      border-radius: 300px;
    }
  }
`;

function AccountLayout() {
  const { userData, isLoading } = useUserData();
  console.log(userData);
  if (isLoading) return <Spinner/>;

  return (
    <Account>
      {userData.map((user) => (
        <UserInfo key={user.id}>
          <figure>
            <img
              src={user.avatar}
              alt={`photo of ${user.firstName} ${user.lastName}`}
            />
            <figcaption>
              <Heading type="h4" as="h1">
                {" "}
                {user.firstName} {user.lastName}
              </Heading>
            </figcaption>
          </figure>
          <LogOut />
        </UserInfo>
      ))}

      <nav>
        <ul>
          <li>
            <Link to="." end="true">
              Bookings
            </Link>
          </li>
          <li>
            <Link to="favorites">Favorites</Link>
          </li>
          <li>
            <Link to="updateprofile">Update Profile</Link>
          </li>
        </ul>
      </nav>

      <Outlet context={{ userData }} />
    </Account>
  );
}

export default AccountLayout;
