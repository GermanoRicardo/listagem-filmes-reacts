export function formatDate(date) {
  let receivedDate;

  if (typeof date === "string") {
    receivedDate = new Date(date);
  } else {
    receivedDate = date;
  }

  return Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC"
  }).format(receivedDate);
}