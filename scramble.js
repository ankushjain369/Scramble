const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");

let newWords = "";
let ranWords = "";

let play = false;

let sWords = [
    "jain",
    "ankush",
    "android",
    "computer",
    "javascript",
    "knowledge",
    "wisdom",
    "kamareddy",
    "hyderabad",
    "possible",
    "paper",
    "pencil",
    "peace",
    "places",
    "flower",
    "languages",
    "hotel",
    "bridge",
    "officer"
];

const createNewWords = () => {
    let ranNum = Math.trunc(Math.random() * sWords.length);
    let tempNum = sWords[ranNum];
    return tempNum;
};

const scrambleWords = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

btn.addEventListener("click", function () {
    if (!play) {
        play = true;
        btn.innerHTML = "GUESS";
        guess.classList.toggle("hidden");
        newWords = createNewWords();
        ranWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the Word: ${ranWords}`;
    } else {
        let tempWords = guess.value;
        if (tempWords === newWords) {
            play = false;
            msg.innerHTML = `Correct Guess. It is ${newWords}.`;
            btn.innerHTML = `Start Again`;
            guess.classList.toggle("hidden");
            guess.value = "";
        } else {
            msg.innerHTML = `Incorrect Guess. Please try again ${ranWords}`;
        }
    }
});