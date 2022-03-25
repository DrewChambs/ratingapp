// March 24, 2022

// Select Numbers buttons
const btnNum = document.querySelectorAll(".btnNumbers");
// Submit button link
const btnSubmit = document.querySelector(".btnSubmit");
// Link to display rating choice
const thankYou = document.querySelector(".app_holder-selection");
// Link to thanks container
const thanksContainer = document.querySelector(".thanks_main");
// Link to main rating container
const ratingContainer = document.querySelector(".rating_main");

btnNum.forEach(item => {
  item.addEventListener("click", e => {
    // console.log(e.currentTarget.dataset.id);
    const rateArray = [];

    let rating = e.currentTarget.dataset.id;
    rateArray.push(rating);
    btnSubmit.addEventListener("click", () => {
      thankYou.innerHTML = `You selected ${rating} out of 5`;
      thanksContainer.classList.add("show-thanks");
      ratingContainer.classList.add("show-rating");
    });
  });
});
