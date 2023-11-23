import Heading from "../components/atoms/Heading";
import styled from "styled-components";
import StyledLink from "../components/atoms/StyledLink";
const Container = styled.div`
  display: grid;
  place-content: center;
  gap: 2rem;
  min-height: 100vh;
`;
function EmailConfirm() {
  return (
    <Container>
      <Heading type="h6" as="h1">
        Check your email box!📧
      </Heading>
      <Heading type="h6" as="h2">
        We sent you a confirmation link to activate your account
      </Heading>
      <StyledLink to="/account">Send Link Again</StyledLink>
    </Container>
  );
}

export default EmailConfirm;
