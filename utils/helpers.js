import _ from "lodash";

export const correctArticle = word => {
  let firstLetter = word.charAt(0).toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.filter(vowel => vowel == firstLetter).length ? "an" : "a";
};

export const fullMonths = [
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
  "December"
];

export const halfMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function generateRangedArray(range) {
  let array = [];
  let currentValue = range[0];
  while (currentValue <= range[1]) {
    array.push(currentValue >= 10 ? currentValue : `0${currentValue}`);
    currentValue += 1;
  }
  return array;
}

export function months() {
  return generateRangedArray([1, 12]);
}

export function days() {
  return generateRangedArray([1, 31]);
}

export function years(arr = null) {
  return generateRangedArray(arr === null ? [1920, 2020] : arr);
}

export function number_format(number, decimals, dec_point, thousands_sep) {
  // Strip all characters but numerical ones.
  number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

export function contains(string, substr) {
  return string.indexOf(substr) !== -1;
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function trueCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function capitalizeWords(string) {
  let splitStr = string.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

export function appendPositionSuffix(number) {
  const substr = number.toString().slice(0, -1);
  let suffix;
  switch (substr) {
    case "0":
      suffix = "th";
      break;
    case "1":
      if (number.toString().slice(0, -2) == "11") suffix = "th";
      else suffix = "st";
      break;
    case "2":
      if (number.toString().slice(0, -2) == "12") suffix = "th";
      else suffix = "nd";
      break;
    case "3":
      if (number.toString().slice(0, -2) == "13") suffix = "th";
      else suffix = "rd";
      break;
    default:
      suffix = "th";
      break;
  }
  return number + suffix;
}

export function currentMonth(full = true) {
  const months = full
    ? [
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
        "December"
      ]
    : [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
  return months[new Date().getMonth()];
}

export function dateStringParser(string) {
  const utcDate = new Date(string);
  const epoch = utcDate.getTime() + 3600 * 1000;
  const date = new Date(epoch);
  const now = new Date();
  const time = now.getTime();
  const daysOfTheWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const monthsOfTheYr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  if (time - epoch < 1000 * 60) return "just now";
  else if (time - epoch < 3600 * 1000) {
    let min = parseInt((time - epoch) / 60000);
    return "about " + min + ` min${min < 2 ? "" : "s"} ago`;
  } else if (date.getDate() === now.getDate() && time - epoch < 86400 * 1000)
    return (
      "today, " +
      pad(
        date.getHours() > 12
          ? date.getHours() - 12
          : date.getHours() === 0
          ? 12
          : date.getHours(),
        2
      ) +
      ":" +
      pad(date.getMinutes(), 2) +
      ` ${date.getHours() > 11 ? "pm" : "am"}`
    );
  else if (time - epoch < 2 * (86400 * 1000))
    return (
      "yesterday, " +
      pad(
        date.getHours() > 12
          ? date.getHours() - 12
          : date.getHours() === 0
          ? 12
          : date.getHours(),
        2
      ) +
      ":" +
      pad(date.getMinutes(), 2) +
      ` ${date.getHours() > 11 ? "pm" : "am"}`
    );
  else if (date.getFullYear() === now.getFullYear())
    return (
      daysOfTheWeek[date.getDay()] +
      ", " +
      appendPositionSuffix(date.getDate()) +
      " " +
      monthsOfTheYr[date.getMonth()]
    );
  else
    return (
      daysOfTheWeek[date.getDay()] +
      ", " +
      appendPositionSuffix(date.getDate()) +
      " " +
      monthsOfTheYr[date.getMonth()] +
      " " +
      date.getFullYear()
    );
}

export function sentenceCase(string, ...otherExempts) {
  let exempts;
  exempts =
    otherExempts === undefined || otherExempts === null
      ? ["for", "is", "of", "a", "the", "in"]
      : ["for", "is", "of", "a", "the", "in", ...otherExempts];
  const stringArray = string.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    let shouldCapitalize = false;
    if (i === 0) shouldCapitalize = true;
    else {
      for (let j = 0; j < exempts.length; j++) {
        shouldCapitalize =
          stringArray[i].toLowerCase() !== exempts[j].toLowerCase();
        if (!shouldCapitalize) break;
      }
    }
    if (shouldCapitalize) stringArray[i] = capitalize(stringArray[i]);
    else {
      stringArray[i] = stringArray[i].toLowerCase();
    }
  }
  return stringArray.join(" ");
}

export const randomString = (length, type = 0) => {
  let permittedCharacters;
  switch (type) {
    case 1:
      permittedCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
      break;
    case 2:
      permittedCharacters = "0123456789abcdefghijklmnopqrstuvwxyz-_";
      break;
    case 3:
      permittedCharacters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
      break;
    case 4:
      permittedCharacters = "0123456789-_";
      break;
    case 5:
      permittedCharacters =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      break;
    case 6:
      permittedCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      break;
    case 7:
      permittedCharacters = "0123456789abcdefghijklmnopqrstuvwxyz";
      break;
    case 8:
      permittedCharacters = "abcdefghijklmnopqrstuvwxyz";
      break;
    default:
      permittedCharacters =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
      break;
  }
  let string = "";
  for (let i = 0; i < length; i++) {
    string += permittedCharacters[_.random(0, permittedCharacters.length - 1)];
  }
  return string;
};

export const uniqueRandomString = (length, type = 0) => {
  let permittedCharacters;
  const time = `${new Date().getTime()}`;
  switch (type) {
    case 1:
      permittedCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
      break;
    case 2:
      permittedCharacters = "0123456789abcdefghijklmnopqrstuvwxyz-_";
      break;
    case 3:
      permittedCharacters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
      break;
    case 4:
      permittedCharacters = "0123456789-_";
      break;
    case 5:
      permittedCharacters =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      break;
    case 6:
      permittedCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      break;
    case 7:
      permittedCharacters = "0123456789abcdefghijklmnopqrstuvwxyz";
      break;
    case 8:
      permittedCharacters = "abcdefghijklmnopqrstuvwxyz";
      break;
    default:
      permittedCharacters =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
      break;
  }
  let string = "";

  let randomLength = length - time.length;
  for (let i = 0; i < randomLength; i++) {
    string += permittedCharacters[_.random(0, permittedCharacters.length - 1)];
  }
  let index = _.random(0, randomLength);
  let end = string.substr(index);
  let start = string.substr(0, index);
  let finalString = start + time + end;
  return finalString;
};

export function ordinalSuffixOf(i) {
  let j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}

export function tenYearsFuture() {
  let currentYear = new Date().getFullYear();
  let tenYears = [currentYear];
  for (let i = 1; i < 11; i++) {
    tenYears.push(currentYear + i);
  }
  return tenYears;
}

export function monthsAndCurrentMonth() {
  return {
    months: fullMonths,
    currentMonth: new Date().getMonth()
  };
}
