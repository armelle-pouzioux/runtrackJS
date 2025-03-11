// BOUTON AVEC CREATE ET REMOVE ELEMENT
function showHide() {
    let article = document.getElementById("citation");

    if (article) {
        article.remove();
    } else {
        article = document.createElement("article");
        article.id = "citation";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    }
}

document.getElementById("button").addEventListener("click", showHide);

// BOUTON AVEC DISPLAY
function showHideDisplay() {
    let article = document.getElementById("citation-display");
    article.style.display = (article.style.display === "none") ? "block" : "none";
}

document.getElementById("button-display").addEventListener("click", showHideDisplay);
