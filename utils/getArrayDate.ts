export function getRecentDates(numDays: number) {
  const currentDate = new Date();
  const recentDates = [];

  for (let i = 0; i < numDays; i++) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - i);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0"); 

    const formattedDate = `${year}-${month}-${day}`;
    recentDates.push(formattedDate);
  }

  return recentDates;
}
