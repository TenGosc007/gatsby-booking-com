import { Moment } from "moment";

const isSelected = (day: Moment, value: Moment, isClicked: boolean) =>
  isClicked && value.isSame(day, "day");

export const beforeToday = (day: Moment) => day.isBefore(new Date(), "day");

const isToday = (day: Moment) => day.isSame(new Date(), "day");

export const isNotThisMonth = (day: Moment, value: Moment) =>
  !(day.format("M") === value.format("M"));

const dayStyles = (day: Moment, value: Moment, isClicked: boolean) => {
  if (isNotThisMonth(day, value)) return "hidden";
  if (beforeToday(day)) return "before";
  if (isSelected(day, value, isClicked)) return "selected";
  if (isToday(day)) return "today";
  return "";
};

export default dayStyles;
