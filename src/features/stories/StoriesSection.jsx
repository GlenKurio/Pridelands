import styled from "styled-components";
import Heading from "../../components/atoms/Heading";
import StoryCard from "./StoryCard";
import Button from "../../components/atoms/Button";

const StyledStoriesSection = styled.section`
  margin-top: 6rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  gap: 3rem;
`;

const StoriesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  height: 100vh;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.35;
  overflow: hidden;

  & video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const stories = [
  {
    author: "Mary Smith",
    heading: "I had the best week ever with my family",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur, beatae corporis optio molestiae temporibus soluta accusamus adipisci dolorem eos quaerat asperiores culpaprovident impedit necessitatibus reprehenderit illo doloribus harum odit",
    img: "/stories/story-1.webp",
    rating: 4,
  },
  {
    author: "Jack Wilson",
    heading: "WOW! My life is completely different now",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur, beatae corporis optio molestiae temporibus soluta accusamus adipisci dolorem eos quaerat asperiores culpaprovident impedit necessitatibus reprehenderit illo doloribus harum odit",
    img: "/stories/story-2.webp",
    rating: 5,
  },
];

function StoriesSection() {
  return (
    <StyledStoriesSection>
      <Heading type="h4" as="h2" color="gradient">
        Stories
      </Heading>
      <StoriesContainer>
        <VideoContainer>
          <video autoPlay muted loop>
            <source src="/bg/video-bg.mp4" type="video/mp4" />
            Your Browser does not support the video
          </video>
        </VideoContainer>
        {stories.map((story) => (
          <StoryCard story={story} key={story.author} />
        ))}

        <Button type="text" size="md">
          Read More Stories
        </Button>
      </StoriesContainer>
    </StyledStoriesSection>
  );
}

export default StoriesSection;
