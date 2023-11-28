import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {background-position: right -30px top 0}
`;
const Container = styled.div`
  width: 100vw;
  height: 50vh;
  display: grid;
  place-content: center;
`;
const SpinnerDiv = styled.div`
  width: 160px;
  height: 20px;
  transform: skewX(-45deg);
  background: linear-gradient(var(--color-brand-500) 0 0) left -30px top 0/30px 20px
    no-repeat #ccc;
  animation: ${rotate} 1s infinite linear;
`;

function Spinner() {
  return (
    <Container>
      <SpinnerDiv></SpinnerDiv>
    </Container>
  );
}

export default Spinner;
