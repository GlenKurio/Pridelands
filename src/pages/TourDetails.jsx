import { HiPlus, HiMinus } from "react-icons/hi2";
import { useTours } from "../features/tours/useTours";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/atoms/Heading";
import StarRating from "../components/atoms/star.rating";
import Button from "../components/atoms/Button";
import StyledLink from "../components/atoms/StyledLink";
import TourCalendar from "../features/availability/Calendar";
import { toast } from "react-hot-toast";
// import { useAvailability } from "../features/availability/useAvailability";
import { useContext, useState } from "react";
import { CalendarContext } from "../contexts/calendar.context";
const StyledTourDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  padding: 2rem;
  gap: 2rem;
  margin-top: 4rem;
`;

const ImgContainer = styled.figure`
  & img {
    max-width: 100%;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    font-size: 1.25rem;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 1.5rem 0;
  }
`;
const DetailsRow = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-gray-800);
  display: block;
  padding: 0.5rem 0.5rem;
  display: flex;
  place-content: center;
  border-bottom: 1px solid var(--color-gray-900);
`;

const Price = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  background-image: linear-gradient(
    to right,
    var(--color-brand-500),
    var(--color-add-orange)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 2rem 0;
`;
const Seats = styled.div`
  & span:nth-child(1) {
    display: block;
    margin-bottom: 2rem;
  }

  & span:nth-child(2) {
    width: 50px;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  & button {
    padding: 1rem;
    border: none;
    background-color: var(--color-brand-500);
    border-radius: var(--border-radius-md);
    cursor: pointer;
    transition: all 0.2s;
    font-size: 2rem;
    display: flex;
    place-content: center;
    color: var(--color-brand-50);
    &:hover {
      background-color: var(--color-add-green-2);
    }

    &:active {
      scale: 0.9;
    }
  }
  font-size: 2.5rem;
  font-weight: bold;
  background-image: linear-gradient(
    to right,
    var(--color-brand-500),
    var(--color-add-orange)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 2rem 0;
`;
const AddImgs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;

  width: 100%;

  & img {
    max-width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function TourDetails() {
  const navigate = useNavigate();
  const { toursAll, isLoading } = useTours();
  console.log(toursAll);
  const { selecDate, selecSlots } = useContext(CalendarContext);
  const [seats, setSeats] = useState(1);
  const [total, setTotal] = useState();
  function handleIncrease() {
    if (!selecDate || !selecSlots)
      return toast("First you need to select a date", {
        icon: "🙂",
      });
    if (+seats >= +selecSlots)
      return toast(
        "Looks like we don`t have anough seats on selected date. Try Another one",
        {
          icon: "🤔",
        }
      );
    setSeats(+seats + 1);
  }
  function handleDecrease() {
    if (!selecDate)
      return toast("First you need to select a date", {
        icon: "🙂",
      });
    if (seats <= 1)
      return toast("Are you sure about that?", {
        icon: "🤨",
      });
    setSeats(+seats - 1);
  }
  // const { isLoadin, availability } = useAvailability();
  // console.log(availability);
  const { id } = useParams();
  if (isLoading) return <div>Loading...</div>;

  const {
    name,
    price,
    description,
    group,
    level,
    img,
    guides,
    duration,
    avgRating,
    accommodation,
    availability,
    images,
    stories,
  } = toursAll.find((tour) => tour.id == id);
  console.log(availability);

  return (
    <StyledTourDetails>
      <ImgContainer>
        <img src={img} alt="" />
        <AddImgs>
          {images.map((image) => (
            <img key={image.id} src={image.url} />
          ))}
        </AddImgs>
      </ImgContainer>
      <ContentContainer>
        <Heading type="h3" as="h1">
          {name}
        </Heading>
        <p>{description}</p>
        <DetailsRow>
          <StarRating
            size={24}
            defaultRating={avgRating}
            color="var(--color-brand-500)"
          />
        </DetailsRow>
        <DetailsRow>Difficulty: {level}</DetailsRow>
        <DetailsRow>Group Size: {group}</DetailsRow>
        <DetailsRow>Guides: {guides}</DetailsRow>
        <DetailsRow>Duration: {duration} days</DetailsRow>
        <DetailsRow>{accommodation}</DetailsRow>

        <TourCalendar availability={availability} duration={duration} />
        <Seats>
          {" "}
          <span>How Many Seats?</span>
          <div>
            <button onClick={handleDecrease}>
              <HiMinus />
            </button>
            <span>{seats}</span>

            <button onClick={handleIncrease}>
              <HiPlus />
            </button>
          </div>
        </Seats>
        <Price>Total: ${total} </Price>
        <ButtonsContainer>
          <Button
            type="primary"
            size="md"
            disabled={!selecDate && !selecSlots}
            onClick={() => navigate(`/checkout/${id}`)}
          >
            Book Now
          </Button>
          {/* <StyledLink to={`/checkout/${id}`}>Book</StyledLink> */}
          <Button type="text" size="md" onClick={() => navigate("..")}>
            &larr; go back
          </Button>
        </ButtonsContainer>
      </ContentContainer>
      {/* {stories.map((story) => (
        <div key={story.id}>
          <span>{story.user_id}</span>
          <span>{story.heading}</span>
          <span>{story.rating}</span>
          <span>{story.content}</span>
        </div>
      ))} */}
    </StyledTourDetails>
  );
}

export default TourDetails;
