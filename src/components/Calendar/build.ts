import { Moment } from "moment";

const buildCalendar = (value: Moment) => {
  const startDay = value.clone().startOf("month").startOf("isoWeek");
  const endDay = value.clone().endOf("month").endOf("isoWeek");
  const day = startDay.clone().subtract(1, "day");
  const calendar = [];
  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  return calendar;
};

export default buildCalendar;
