let number = 0;

const resultH1 = document.getElementsByTagName("h1")[0];
const plusButton = document.getElementsByTagName("button")[0];

// plusButton.addEventListener("click", () => {
//     number++;
//     resultH1.innerHTML = number;
// });

plusButton.onclick = () => {
    number++;
    resultH1.innerHTML = number;
};
