export const persianNumToEnglishNum = (number) => {
  if (number) {
    const english = {
      "۰": 0,
      "۱": 1,
      "۲": 2,
      "۳": 3,
      "۴": 4,
      "۵": 5,
      "۶": 6,
      "۷": 7,
      "۸": 8,
      "۹": 9,
      "/": "/",
      T: "T",
      ":": ":",
      ".": ".",
      "+": "+",
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      "-": "-",
    };
    number = number.toString().split("");
    let englishNumber = "";
    for (let i = 0; i < number.length; i++) {
      number[i] = english[number[i]];
    }
    for (let i = 0; i < number.length; i++) {
      englishNumber += number[i];
    }
    return englishNumber;
  } else {
    return number;
  }
};
export const slashToHiphen = (date) => {
  return date.replaceAll("/", "-");
};
