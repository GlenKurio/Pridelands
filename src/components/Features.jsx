import styled from "styled-components";
import { devices } from "./layout/Queries";
import GridContainer from "./layout/GridContainer";
import Paragraph from "./atoms/Paragraph";
import Heading from "./atoms/Heading";

const StyledFatures = styled.section`
  display: flex;
  place-content: center;
  padding: 4rem 0;

  height: 120vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(234, 153, 123, 0.2),
      rgba(250, 193, 122, 0.3)
    ),
    url("../../public/bg/elephants-3.webp");
  background-size: cover;
  background-position: top;

  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  -webkit-clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  color: var(--color-brand-50);
  user-select: none;
  margin: 3rem 1rem 2rem 1rem;

  @media ${devices.tablet} {
    background-position: center;
  }
  @media ${devices.mobileL} {
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
    -webkit-clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
    padding-top: 4rem;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  background-color: rgba(19, 111, 99, 0.7);
  border-radius: var(--border-radius-md);

  & img {
    width: 48px;
    height: 48px;
  }
  transition: 0.3s;
  &:hover {
    scale: 1;
  }

  &:not(:hover) {
    scale: 0.9;
  }
`;

function Features() {
  return (
    <StyledFatures>
      <GridContainer type="autofitFeatures">
        <FeatureCard>
          <span>
            <img
              src="../../public/icons/explore_black_24dp.svg"
              aria-hidden
              alt=""
            />
          </span>
          <Heading type="h6" as="h6">
            Explore the world
          </Heading>
          <Paragraph type="psm">
            Let your adventurous spirit roam free as you explore uncharted
            territories and create unforgettable memories.
          </Paragraph>
        </FeatureCard>
        <FeatureCard>
          <span>
            <img
              src="../../public/icons/south_america_black_24dp.svg"
              aria-hidden
              alt=""
            />
          </span>
          <Heading type="h6" as="h6">
            Meet Nature
          </Heading>
          <Paragraph type="psm">
            Encounter Africa`s majestic wildlife up close, igniting a deep
            connection with nature`s awe-inspiring beauty.
          </Paragraph>
        </FeatureCard>
        <FeatureCard>
          <span>
            <img
              src="../../public/icons/person_pin_circle_black_24dp.svg"
              aria-hidden
              alt=""
            />
          </span>
          <Heading type="h6" as="h6">
            Find Your Way
          </Heading>
          <Paragraph type="psm">
            Uncover the magic of diverse landscapes, immerse in rich cultures,
            and expand your horizons with us.
          </Paragraph>
        </FeatureCard>
        <FeatureCard>
          <span>
            <img
              src="../../public/icons/favorite_border_black_24dp.svg"
              aria-hidden
              alt=""
            />
          </span>
          <Heading type="h6" as="h6">
            Live healthier life
          </Heading>
          <Paragraph type="psm">
            Embrace a healthier lifestyle in Africa`s natural playground,
            revitalizing mind, body, and soul.
          </Paragraph>
        </FeatureCard>
      </GridContainer>
    </StyledFatures>
  );
}

export default Features;
