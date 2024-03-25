const datesFerie = [
  "1/0/2024",
  "1/3/2024",
  "1/4/2024",
  "8/4/2024",
  "9/4/2024",
  "20/4/2024",
  "14/6/2024",
  "15/9/2024",
  "1/10/2024",
  "11/10/2024",
  "25/11/2024",
];

const getDayName = (number) => {
  const joursSemaines = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  return joursSemaines[number];
};

const getMonthName = (number) => {
  const joursSemaines = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  return joursSemaines[number];
};

const jourTravaille = (date) => {
  const jour = date.getDate();
  const mois = date.getMonth();
  const annee = date.getFullYear();

  const dayName = getDayName(date.getDay());
  for (const dateFerie of datesFerie) {
    const [jourFerie, moisFerie, anneeFerie] = dateFerie.split("/");
    if (jourFerie == jour && moisFerie == mois && dayName == "Samedi" || dayName == "Dimanche") {
      console.log(`Non ,le ${dayName} ${jourFerie}  ${annee} est un week-end`);
      return;
    } else if (jourFerie == jour && moisFerie == mois && dayName != "Samedi") {
      console.log(
        `le ${dayName} ${jourFerie} ${getMonthName(
          mois
        )}  ${annee} est un jour férié`
      );
      return;
    }
  }
  console.log(
    `Oui ,le ${dayName} ${jour} ${getMonthName(
      mois
    )} ${annee} est un jour travaillé`
  );
};

let date = new Date("2024-04-05");
jourTravaille(date);
