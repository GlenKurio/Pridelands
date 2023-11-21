import styled from "styled-components";
import Button from "../../components/atoms/Button";

const OutContainer = styled.div`
  margin-top: 5rem;
`;

function LogOut() {
  return (
    <OutContainer>
      <Button type="text" size="md" onClick={console.log("huj")}>
        LogOut
      </Button>
    </OutContainer>
  );
}

export default LogOut;
