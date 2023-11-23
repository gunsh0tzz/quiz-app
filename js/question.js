console.clear();

const answer = document.querySelector('[data-js="answer"]');
const answerButton = document.querySelector('[data-js="answer-button"]');

answerButton.addEventListener("click", () => {
    answer.classList.toggle("hide-answer");

    if(answerButton.textContent == "Antwort zeigen") {
        answerButton.textContent = "Antwort verstecken";
    } else {
        answerButton.textContent = "Antwort zeigen"
    }
});