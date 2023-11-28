import styled from "styled-components";
import Heading from "../../components/atoms/Heading";
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SuccessPage() {
  return (
    <Container>
      <Heading type="h4" as="h1">
        Order Placed. Thank you for choosing our tours! 🦏
      </Heading>
    </Container>
  );
}

export default SuccessPage;
