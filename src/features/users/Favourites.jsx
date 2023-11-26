import { useFavs } from "./useFavourites";
import TourCard from "../tours/TourCard";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import Heading from "../../components/atoms/Heading";
import { devices } from "../../components/layout/Queries";
const FavCardsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
`;
const Empty = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  place-content: center;
  max-width: 50%;
  margin: 0 auto;
  @media ${devices.tablet} {
    max-width: 100%;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;

function Favourites() {
  const { userFavs, isLoading } = useFavs();
  console.log(userFavs);
  if (isLoading) return <div>Loading ...</div>;
  if (userFavs.length == 0)
    return (
      <Empty>
        <Heading type="h6" as="h3">
          Looks like you have no favorites so far... It`s time to add some!
        </Heading>
        <Button>Browse Tours</Button>
      </Empty>
    );
  return (
    <Container>
      <Heading type="h5" as="h3">
        Your Favorites
      </Heading>
      <FavCardsContainer>
        {userFavs.map((fav) => (
          <TourCard tour={fav.tours} key={fav.id} favs={userFavs} />
        ))}
      </FavCardsContainer>
    </Container>
  );
}

export default Favourites;
