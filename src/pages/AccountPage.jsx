import LogOut from "../features/auth/LogOut";
import styled from "styled-components";
const Account = styled.div`
  height: 100vh;
`;

function AccountPage() {
  return (
    <Account>
      <h1>account page</h1>
      <LogOut />
    </Account>
  );
}

export default AccountPage;
