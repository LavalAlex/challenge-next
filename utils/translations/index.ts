const days_abbr = {
  "abbr-mon": "lun",
  "abbr-tues": "mar",
  "abbr-wed": "mie",
  "abbr-thurs": "jue",
  "abbr-fri": "vie",
  "abbr-sat": "sab",
  "abbr-sun": "dom",
};

const days = {
  ...days_abbr,
  monday: "lunes",
  tuesday: "martes",
  wednesday: "miercoles",
  thursday: "jueves",
  friday: "viernes",
  saturday: "sabado",
  sunday: "domingo",
};

const months_abbr = {
  "abbr-jan": "ene",
  "abbr-feb": "feb",
  "abbr-mar": "mar",
  "abbr-apr": "abr",
  "abbr-may": "may",
  "abbr-jun": "jun",
  "abbr-jul": "jul",
  "abbr-aug": "ago",
  "abbr-sep": "sep",
  "abbr-oct": "oct",
  "abbr-nov": "nov",
  "abbr-dec": "dic",
};

const months = {
  ...months_abbr,
  january: "enero",
  february: "febrero",
  march: "marzo",
  april: "abril",
  may: "mayo",
  june: "junio",
  july: "julio",
  august: "agosto",
  september: "septiembre",
  october: "octubre",
  november: "noviembre",
  december: "diciembre",
};

const roles = {
  user: "usuario",
};

const priority = {
  low: "baja",
  medium: "media",
  high: "alta",
};

const status = {
  cancelled: "anulado",
  cloused: "cerrado",
  solved: "resuelto",
  resolved: "resuelto",
  opened: "abierto",
};

const categories = {
  support: "soporte",
  order: "pedido",
  developer: "desarrollo",
};

const others = {
  all: "todo",
};

type Translations = { [key: string]: string };
const translations: Translations = {
  ...categories,
  ...days,
  ...months,
  ...others,
  ...priority,
  ...roles,
  ...status,
};

function toSpanish(str: string) {
  const s = str.toLowerCase();
  if (translations[s]) return translations[s];
  if (translations[`abbr-${s}`]) return translations[`abbr-${s}`];
  return str;
}

export default toSpanish;
