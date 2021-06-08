function isSelected(day: any, value: any, isClicked: boolean) {
  return isClicked && value.isSame(day, "day");
}

export function beforeToday(day: any) {
  return day.isBefore(new Date(), "day");
}

function isToday(day: any) {
  return day.isSame(new Date(), "day");
}

export function isNotThisMonth(day: any, value: any) {
  return !(day.format("M") === value.format("M"));
}

export default function dayStyles(day: any, value: any, isClicked: boolean) {
  if (isNotThisMonth(day, value)) return "hidden";
  if (beforeToday(day)) return "before";
  if (isSelected(day, value, isClicked)) return "selected";
  if (isToday(day)) return "today";
  return "";
}
