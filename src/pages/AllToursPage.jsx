import Heading from "../components/atoms/Heading";
import TourCard from "../features/tours/TourCard";
import { useTours } from "../features/tours/useTours";
import styled from "styled-components";
import { useFavs } from "../features/users/useFavourites";
import Spinner from "../components/atoms/Spinner";
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 1rem;
  align-items: center;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem 2rem;
  margin-top: 4rem;
`;

function AllToursPage() {
  const { isLoading, toursAll } = useTours();
  const { userFavs } = useFavs();
  if (isLoading) return <Spinner />;
  return (
    <PageContainer>
      <Heading type="h2" as="h1" color="gradient">
        Discover our tours
      </Heading>
      <CardsContainer>
        {toursAll.map((tour) => (
          <TourCard key={tour.id} tour={tour} favs={userFavs} />
        ))}
      </CardsContainer>
    </PageContainer>
  );
}

export default AllToursPage;
