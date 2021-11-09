export function Rater(ratingEl) {
  const stars = ratingEl.querySelectorAll(".star");

  const ratingHover = (e) => {
    const currentHover = e.currentTarget.getAttribute("data-value");
    highlightRating(currentHover);
  };

  const resetRating = (e) => {
    const currentRating = ratingEl.getAttribute("data-rating");
    highlightRating(currentRating);
  };

  const highlightRating = (rating) => {
    stars.forEach((star) => {
      star.style.color =
        rating >= star.getAttribute("data-value") ? "yellow" : "gray";
    });
  };

  const setRating = (e) => {
    ratingEl.setAttribute(
      "data-rating",
      e.currentTarget.getAttribute("data-value")
    );
  };

  resetRating();

  stars.forEach((star) => {
    star.addEventListener("click", setRating);
    star.addEventListener("mouseover", ratingHover);
  });

  ratingEl.addEventListener("mouseout", resetRating);
}
