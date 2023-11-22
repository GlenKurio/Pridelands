import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { useLogout } from "./useLogout";
const OutContainer = styled.div`
  margin-top: 5rem;
`;

function LogOut() {
  const { logout, isLoading } = useLogout();
  return (
    <OutContainer>
      <Button type="text" size="md" disabled={isLoading} onClick={logout}>
        LogOut
      </Button>
    </OutContainer>
  );
}

export default LogOut;
