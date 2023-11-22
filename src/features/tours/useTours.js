import { getTours } from "../../services/apiTours";
import { getTourStories } from "../../services/apiStories";
import { getTourImages } from "../../services/apiTours";
import { getTourAvailability } from "../../services/apiTours";
import { useQuery } from "@tanstack/react-query";

async function getToursWithImagesStoriesAvailability() {
  try {
    const tours = await getTours();
    const toursWithEverything = tours.map(async (tour) => {
      const tourImgs = await getTourImages(tour.id);
      const tourStories = await getTourStories(tour.id);
      const tourAvailability = await getTourAvailability(tour.id);
      return {
        ...tour,
        images: tourImgs,
        availability: tourAvailability,
        stories: tourStories,
      };
    });
    const toursAll = await Promise.all(toursWithEverything);
    return toursAll;
  } catch (error) {
    throw new Error("failed to fetch eveyrhing you want");
  }
}

export function useTours() {
  const {
    isLoading,
    data: toursAll,
    error,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: getToursWithImagesStoriesAvailability,
  });

  return { isLoading, error, toursAll };
}
