import styled from "styled-components";
import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";
import StarRating from "../../components/atoms/star.rating";
import { devices } from "../../components/layout/Queries";

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(19, 111, 99, 0.6);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-lg);
  max-width: 60%;
  transition: all 0.3s;

  &:hover figcaption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  &:hover img {
    transform: translateX(-2rem) scale(1);
    filter: blur(3px) brightness(80%);
  }

  @media ${devices.tablet} {
    flex-direction: column;
    max-width: 90%;
  }
`;

const AuthorImg = styled.figure`
  align-self: center;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  & img {
    height: 100%;
    transform: translateX(-2rem) scale(1.4);
    transition: all 0.5s;
  }

  & figcaption {
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    text-align: center;
    opacity: 0;
    transition: all 0.5s;
  }
`;

const StoryBody = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  @media ${devices.tablet} {
    width: 100%;
  }
`;

const StoryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

function StoryCard({ story }) {
  return (
    <StoryContainer>
      <AuthorImg>
        <img src={story.img} alt="" />
        <figcaption>{story.author}</figcaption>
      </AuthorImg>
      <StoryBody>
        <StoryText>
          <Heading type="h6" as="h3" color="gradient">
            {story.heading}
          </Heading>
          <Paragraph type="psm" color="white">
            {story.body}
          </Paragraph>
        </StoryText>
        <StarRating
          color="var(--color-brand-500)"
          size={24}
          defaultRating={story.rating}
        />
      </StoryBody>
    </StoryContainer>
  );
}

export default StoryCard;
