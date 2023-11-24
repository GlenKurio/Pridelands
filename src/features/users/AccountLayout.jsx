import LogOut from "../auth/LogOut";
import styled from "styled-components";
import { useUserData } from "./useUserData";
import { Outlet, Link } from "react-router-dom";

const Account = styled.div`
  min-height: 100vh;
  padding-top: 6rem;

  & nav {
    & ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 2rem;
      padding-bottom: 1rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--color-brand-500);

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
`;

function AccountLayout() {
  const { isLoading, userData } = useUserData();

  console.log(userData);
  if (!isLoading) return <div>Loading ...</div>;

  return (
    <Account>
      <UserInfo>
        <figure>
          <img
            src={userData.avatar || "/public/avatars/portrait-ole.png"}
            alt=""
          />
          <figcaption>{`The photo of ${userData.firstName}`}</figcaption>
        </figure>
      </UserInfo>
      <LogOut />
      <nav>
        <ul>
          <li>
            <Link to="." end>
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

      <Outlet />
    </Account>
  );
}

export default AccountLayout;
