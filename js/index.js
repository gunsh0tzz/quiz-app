console.clear()

const bookmarkButton = document.querySelector("[data-js='bookmark-button']");
const answerButton = document.querySelector("[data-js='answer-button']");
const answer = document.querySelector("[data-js='answer']");

bookmarkButton.addEventListener("click",() => {

    if (!bookmarkButton.classList.contains("bookmarked")) {
        bookmarkButton.innerHTML = `<img src="assets/img/bookmark.svg" alt="Bookmark Icon" width="16px" height="16px" />`;
        bookmarkButton.classList.add("bookmarked");
        return;
    }
    
    bookmarkButton.innerHTML = `<img src="assets/img/no-bookmark.svg" alt="Bookmark Icon" width="16px" height="16px" />`;
    bookmarkButton.classList.remove("bookmarked");
});

answerButton.addEventListener("click", () => {

    if(!answer.classList.contains("answer")) {
        answer.classList.add("answer");
        answerButton.textContent = "Antwort zeigen";
        return;
    }

    answer.classList.remove("answer");
    answerButton.textContent = "Antwort verstecken";
});