import LogOut from "../auth/LogOut";
import styled from "styled-components";
import { useUserData } from "./useUserData";

const Account = styled.div`
  min-height: 100vh;
`;

//TODO: HOW TO GET USER DATA I NEED FOR ACCOUNT PAGE????
function AccountPage() {
  const { isLoading, userData } = useUserData();
  console.log(userData);
  return (
    <Account>
      <h1>account page</h1>
      <LogOut />
    </Account>
  );
}

export default AccountPage;
