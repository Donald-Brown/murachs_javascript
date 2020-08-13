let $ = function (id) {
  return document.getElementById(id);
};

let calculateDays = function () {
  let year = $("year").value;
  let month = $("month").value - 1;
  let day = $("day").value;

  let now = new Date();
  let calculateTo = new Date(now);
  calculateTo.setMonth(month);
  calculateTo.setDate(day);
  calculateTo.setFullYear(year);
  console.log(calculateTo.toString());
  console.log(now.toString());
  // time until in miliseconds
  console.log(calculateTo.getTime());
  console.log(now.getTime());
  let timeUntil = calculateTo.getTime() - now.getTime();
  //convert ms to days
  let daysUntil = Math.ceil(timeUntil / 8.64e7);

  let message = "There";
  message += daysUntil === 1 ? " is one day" : " are " + daysUntil + " days";
  message += " left.";
  $("output").innerHTML = message;
};

window.onload = function () {
  $("button").onclick = calculateDays;
};
