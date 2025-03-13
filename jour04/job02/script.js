
function jsonValueKey(jsonString, key){
    try{
        // je convertie ma chaine json en objet js
    const obj= JSON.parse(jsonString)
    // je vérifie l'existance d'une key dans l'obj
    if (key in obj){
        return obj[key]
    }else{
        console.warn(`La clé "${key}" n'existe pas dans l'objet JSON.`);
        return null;
    }
    // jattrape les erreurs si il y en a 
    } catch(error){
        console.error("Erreur lors de la conversion JSON:",error);
        return null;
    }
}

// je définis mes variables
let jsonString='{"name": "John", "age": 30, "city": "Marseille"}';
let key= "city"
console.log(jsonValueKey(jsonString, key));

//test avec variable invalide 
const invalidKey = "ville";
console.log(jsonValueKey(jsonString, invalidKey));