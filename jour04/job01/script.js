document.getElementById("button").addEventListener("click", async function() {
    let container = document.getElementById("expressionContainer");

    // Si le paragraphe est déjà visible, on le cache
    if (container.style.display === "block") {
        container.style.display = "none";
        return;
    }

    try {
        let response = await fetch("expression.txt");

        if (!response.ok) {
            throw new Error(`Erreur ${response.status} : ${response.statusText}`);
        }

        let text = await response.text();

        let p = document.createElement("p");
        p.textContent = text;
        container.innerHTML = `<p>${text}</p>`;
        container.style.display = "block"; // On l'affiche
        
    } catch (error) {
        console.error("Erreur :", error);
    }

    
});
