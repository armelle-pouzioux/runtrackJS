let compteur = 0;

function addOne(){
    compteur++;
    document.getElementById("compteur").textContent=compteur;
}

document.getElementById("bouton").addEventListener("click", addOne);
