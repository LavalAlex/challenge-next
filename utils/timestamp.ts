const days = [
  { full: "sunday", abbr: "sun" },
  { full: "monday", abbr: "mon" },
  { full: "tuesday", abbr: "tues" },
  { full: "wednesday", abbr: "wed" },
  { full: "thursday", abbr: "thurs" },
  { full: "friday", abbr: "fri" },
  { full: "saturday", abbr: "sat" },
];
const months = [
  { full: "january", abbr: "jan" },
  { full: "february", abbr: "feb" },
  { full: "march", abbr: "mar" },
  { full: "april", abbr: "apr" },
  { full: "may", abbr: "may" },
  { full: "june", abbr: "jun" },
  { full: "july", abbr: "jul" },
  { full: "august", abbr: "aug" },
  { full: "september", abbr: "sep" },
  { full: "october", abbr: "oct" },
  { full: "november", abbr: "nov" },
  { full: "december", abbr: "dec" },
];

function timestamp(str: string) {
  const date = new Date(str);
  return {
    dd: date.getDate().toString().padStart(2, "0"),
    mm: (date.getMonth() + 1).toString().padStart(2, "0"),
    yyyy: date.getFullYear().toString(),

    month: months[date.getMonth()],
    day: days[date.getDay()],

    hours: date.getHours().toString().padStart(2, "0"),
    minutes: date.getMinutes().toString().padStart(2, "0"),
  };
}

export default timestamp;
