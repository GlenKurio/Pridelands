import { useState } from "react";
import { useAddToFavs } from "../features/tours/useAddFav";
import { useDeleteFavs } from "../features/tours/useDeleteFav";
import { useEffect } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
};

const heartContainerStyle = {
  display: "grid",
  placeContent: "center",
};
export default function Favourite({
  color = "red",
  size = 24,
  className = "",
  tourId: currentTourId,
  isInFavorites,
}) {
  //   const isInFavorites = favs?.some((fav) => currentTourId === fav.tour);
  const { isAdding, saveToFavs } = useAddToFavs();
  const { isDeleting, deleteFav } = useDeleteFavs();
  const [inFav, setInFav] = useState(isInFavorites);

  function handleFav() {
    // Check if tour is already in favorites for this user
    setInFav(!inFav);
    if (isInFavorites) {
      deleteFav(currentTourId);
    } else {
      saveToFavs(currentTourId);
    }
  }

  return (
    <div style={containerStyle}>
      <div style={heartContainerStyle}>
        <Heart
          color={color}
          size={size}
          full={inFav}
          disabled={isAdding || isDeleting}
          onClick={handleFav}
        />
      </div>
    </div>
  );
}

function Heart({ onClick, full, color, size }) {
  const heartStyle = {
    width: `${size}px`,
    height: `${size}px`,
    dsiplay: "block",
    cursor: "pointer",
  };

  return (
    <span role="button" style={heartStyle} onClick={onClick}>
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={color}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={color}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      )}
    </span>
  );
}
