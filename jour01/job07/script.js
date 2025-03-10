function jourTravaille(date) {
    let joursFeries2024 = [
        "2024-01-01", // Nouvel An
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-05-09", // Ascension
        "2024-05-20", // Lundi de Pentecôte
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25"  // Noël
    ];

    let jour = date.getDate();
    let mois = date.getMonth() + 1; // getMonth() commence à 0
    let annee = date.getFullYear();
    let dateStr = `${annee}-${mois.toString().padStart(2, "0")}-${jour.toString().padStart(2, "0")}`;

    let jourSemaine = date.getDay(); // 0 = Dimanche, 6 = Samedi

    if (joursFeries2024.includes(dateStr)) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié.`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, le ${jour} ${mois} ${annee} est un week-end.`);
    } else {
        console.log(`Oui, le ${jour} ${mois} ${annee} est un jour travaillé.`);
    }
}

// Exemples de test
jourTravaille(new Date(2024, 0, 1));  // 1er janvier 2024 (jour férié)
jourTravaille(new Date(2024, 4, 1));  // 1er mai 2024 (jour férié)
jourTravaille(new Date(2024, 6, 14)); // 14 juillet 2024 (jour férié)
jourTravaille(new Date(2024, 2, 6));  // 6 mars 2024 (jour travaillé)
jourTravaille(new Date(2024, 9, 5));  // 5 octobre 2024 (week-end)
