// March 24, 2022

// Select Numbers buttons
const btnNum = document.querySelectorAll(".btnNumbers");
const btnSubmit = document.querySelector(".btnSubmit");
const thankYou = document.querySelector(".app_holder-selection");

btnNum.forEach(item => {
  item.addEventListener("click", e => {
    // console.log(e.currentTarget.dataset.id);
    const rateArray = [];

    let rating = e.currentTarget.dataset.id;
    rateArray.push(rating);
    btnSubmit.addEventListener("click", () => {
      // let thankmessage = "You selected";
      thankYou.innerHTML = `You selected ${rating} out of 5`;
    });
  });
});
