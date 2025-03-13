document.getElementById("button").addEventListener("click", async function() {
    try {
        let response = await fetch("expression.txt");

        if (!response.ok) {
            throw new Error(`Erreur ${response.status} : ${response.statusText}`);
        }

        let text = await response.text();

        let p = document.createElement("p");
        p.textContent = text;

        document.getElementById("expressionContainer").innerHTML = "";
        document.getElementById("expressionContainer").appendChild(p);
        
    } catch (error) {
        console.error("Erreur :", error);
    }
});
