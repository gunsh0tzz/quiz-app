console.clear()

const bookmarkButton = document.querySelector("[data-js='bookmark-button']");

bookmarkButton.addEventListener("click",() => {

    if (!bookmarkButton.classList.contains("bookmarked")) {
        bookmarkButton.innerHTML = `<img src="assets/img/bookmark.svg" alt="Bookmark Icon" width="16px" height="16px" />`;
        bookmarkButton.classList.add("bookmarked");
        return;
    }
    
    bookmarkButton.innerHTML = `<img src="assets/img/no-bookmark.svg" alt="Bookmark Icon" width="16px" height="16px" />`;
    bookmarkButton.classList.remove("bookmarked");
});