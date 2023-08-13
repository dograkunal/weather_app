export default function dateBuilder(data) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[data.getDay()];
  let date = data.getDate();
  let month = months[data.getMonth()];
  let year = data.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
