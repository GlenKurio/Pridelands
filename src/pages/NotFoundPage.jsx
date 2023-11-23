import Heading from "../components/atoms/Heading";
import StyledLink from "../components/atoms/StyledLink";
import styled from "styled-components";
const PageContainer = styled.div`
  display: grid;
  place-content: center;
  gap: 4rem;
  margin: 6rem 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 60%;
  margin: 0 auto;
`;
function NotFoundPage() {
  return (
    <PageContainer>
      <TextContainer>
        <Heading type="h4" as="h1" color="gradient">
          Whoopsy! Looks like this page doesn`t exist.
        </Heading>
        <Heading type="h5" as="h2">
          It can mean only one thing... ALIENS 👽
        </Heading>
        <StyledLink to="/">Go back to home page</StyledLink>
      </TextContainer>
    </PageContainer>
  );
}

export default NotFoundPage;
