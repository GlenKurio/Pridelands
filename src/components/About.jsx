import Heading from "./atoms/Heading";
import styled from "styled-components";
import GridContainer from "./layout/GridContainer";
import Paragraph from "./atoms/Paragraph";
import Button from "./atoms/Button";
import { devices } from "./layout/Queries";
import { useNavigate } from "react-router-dom";

const StyledAboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin: 6rem 1rem 1rem 1rem;
  height: min-content;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;

  @media ${devices.mobileL} {
    width: 350px;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--color-gray-900);
  text-align: left;
`;

const ImageComposition = styled.div`
  position: relative;

  & img {
    max-width: 60%;
    max-height: 800px;
    box-shadow: var(--shadow-sm);
    border-radius: 9px;
    position: absolute;

    transition: all 0.2s;

    outline-offset: 0.5rem;
  }

  & img:nth-child(1) {
    left: 0;
    top: -1.5rem;
  }
  & img:nth-child(2) {
    right: 0;
    top: 1.5rem;
  }
  & img:nth-child(3) {
    left: 20%;
    top: 6rem;
  }

  & img:hover {
    outline: 0.85rem solid var(--color-brand-500);

    transform: scale(1.05) translateY(-0.3rem);
    box-shadow: var(--shadow-md);
    z-index: 20;
  }

  & img:not(:hover) {
    transform: scale(0.9);
  }

  @media ${devices.laptop} {
    background-position: center;
    min-height: 40vh;
  }
  @media ${devices.tablet} {
    background-position: center;
    min-height: 45vh;
    & img:nth-child(1) {
      left: 0;
      top: -1.5rem;
    }
    & img:nth-child(2) {
      right: 1rem;
      top: 1.5rem;
    }
    & img:nth-child(3) {
      left: 20%;
      top: 6rem;
    }
  }
  @media ${devices.mobileL} {
    background-position: center;
    min-height: 25vh;
    width: 350px;
    & img:nth-child(1) {
      left: 0;
      top: -1.5rem;
    }
    & img:nth-child(2) {
      right: 2.5rem;
      top: 1.5rem;
    }
    & img:nth-child(3) {
      left: 10%;
      top: 6rem;
    }
  }
  @media ${devices.mobileM} {
    background-position: center;
    min-height: 25vh;
  }
  @media ${devices.mobileS} {
    background-position: center;
    min-height: 20vh;
  }
`;

function About() {
  const navigate = useNavigate();
  return (
    <StyledAboutContainer>
      <Heading color="gradient" type="h4" as="h2">
        Exciting tours for adventurous people
      </Heading>
      <GridContainer type="autofitMD">
        <StyledContentContainer>
          <StyledTextContainer>
            <Heading type="h6" as="h3">
              You`re going to fall in love with nature
            </Heading>
            <Paragraph>
              From the moment you set foot on the African soil, you`ll be
              immersed in a world where nature reigns supreme. Feel your heart
              race as you witness a herd of majestic elephants wandering across
              the vast savannah, or marvel at the graceful movements of a
              leopard perched high in a tree. Prepare to fall in love with the
              breathtaking landscapes and awe-inspiring wildlife that Africa has
              to offer.
            </Paragraph>
          </StyledTextContainer>
          <StyledTextContainer>
            <Heading type="h6" as="h3">
              Live adventures like you never have before
            </Heading>
            <Paragraph>
              Whether you`re embarking on a thrilling game drive through the
              African bush, navigating the winding channels of the Okavango
              Delta in a traditional mokoro canoe, or trekking through dense
              rainforests in search of rare primates, every moment will be
              filled with exhilaration. Push your limits, challenge your senses,
              and create memories that will stay with you forever.
            </Paragraph>
          </StyledTextContainer>
          <Button type="primary" size="md" onClick={() => navigate("/tours")}>
            Discover tours
          </Button>
        </StyledContentContainer>
        <ImageComposition>
          <img
            src="../../public/composition/comp-elephant.webp"
            alt="People in boat on the river and group of Elephants on the shore."
          />
          <img
            src="../../public/composition/comp-helicopter.webp"
            alt="Helicopter flying over the Victoria Fall in Zimbabwe"
          />
          <img
            src="../../public/composition/comp-lion.webp"
            alt="People on safri shuttle in savannah looking on a adult male lion"
          />
        </ImageComposition>
      </GridContainer>
    </StyledAboutContainer>
  );
}

export default About;
