console.clear();

const answer = document.querySelector('[data-js="answer"]');
const answerButton = document.querySelector('[data-js="answer-button"]');

const bookmark = document.querySelector('[data-js="bookmark"]');

answerButton.addEventListener("click", () => {
    answer.classList.toggle("hide-answer");

    if(answerButton.textContent == "Antwort zeigen") {
        answerButton.textContent = "Antwort verstecken";
    } else {
        answerButton.textContent = "Antwort zeigen"
    }
});

bookmark.addEventListener("click", () => {

    if (!bookmark.classList.contains("bookmarked")) {
        bookmark.innerHTML = '<img src="img/icons/bookmarked.png" alt="Bookmark Icon" width="16" height="16"/>';
    } else {
        bookmark.innerHTML = '<img src="img/icons/not-bookmarked.png" alt="Bookmark Icon" width="16" height="16"/>';
    }

    bookmark.classList.toggle("bookmarked");
});