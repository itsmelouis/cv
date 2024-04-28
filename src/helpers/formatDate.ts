const shortDate = [
  "Janv.",
  "Fév.",
  "Mar.",
  "Avr.",
  "Mai",
  "Juin",
  "Jul.",
  "Août",
  "Sept.",
  "Oct.",
  "Nov.",
  "Déc.",
];

export const formatDate = (date : string) => {
  const [year, month] = date.split("-");
  return `${shortDate[parseInt(month) - 1]} ${year}`;
};
