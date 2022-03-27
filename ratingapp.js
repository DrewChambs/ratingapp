// March 26, 2022
// Rating refactored
// Link to buttons
const btnSubmit = document.querySelector(".btnSubmit");
// Link to all numbers buttons
const btnNumbers = document.querySelectorAll(".btnNumbers");
// Link to rating selection
const ratingDisplay = document.querySelector(".app__thanks-selection");
// Link to thank you display
const thanksDisplay = document.querySelector(".rating-app-thanks");
// Link to main rating app display
const ratingAppContainer = document.querySelector(".rating-app-container");
// Link to close button
const closeBtn = document.querySelector(".app__close");

btnNumbers.forEach(number => {
  // Add event listener numbers nodelist
  number.addEventListener("click", e => {
    let rating = e.currentTarget.dataset.id;
    console.log(rating);
    btnSubmit.addEventListener("click", () => {
      // Display selection in window
      ratingDisplay.innerHTML = `You selected ${rating} out of 5`;
      // Display thank you window
      thanksDisplay.classList.add("show-thanks");
      ratingAppContainer.classList.add("hide-rating-app");
    });
  });
});

// Add event listener to close button
// to return to appp intro display
closeBtn.addEventListener("click", () => {
  // Display thank you window
  thanksDisplay.classList.remove("show-thanks");
  ratingAppContainer.classList.remove("hide-rating-app");
});
// btnSubmit.addEventListener("click", () => {
//   console.log("Button was clicked!");
// });
