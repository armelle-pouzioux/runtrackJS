function tri(number, order){
    if (order==='asc'){
        return number.sort((a,b)=>a-b);
    } else if(order ==='desc'){
        return number.sort((a,b)=>b-a);
    } else{
        console.error("L'ordre doit être 'asc' ou 'desc'.");
        return numbers;
    }
}

let numbersAsc = [5, 2, 8, 1, 4];
let numbersDesc = [5, 2, 8, 1, 4];

console.log(tri(numbersAsc, 'asc'));   // [1, 2, 4, 5, 8]
console.log(tri(numbersDesc, 'desc')); // [8, 5, 4, 2, 1]