/*
Task

The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information

Rules

1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"

Your task is to code a UK driving license number using an Array of data. The Array will look like

data = ["John","James","Smith","01-Jan-2000","M"];

Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female

You will need to output the full 16 digit driving license number.
*/

function driver(data) {
  let fiveCharSurname = "";
  for (let i=0; i < 5; i++) {
    data[2][i] ? fiveCharSurname = fiveCharSurname.concat(data[2][i]).toUpperCase() : fiveCharSurname = fiveCharSurname.concat("9");
  }
  const birthDecadeDigit = data[3][data[3].length - 2];
  let monthOfBirth = "";
  switch (data[3].match(/\w{3}/i)[0]) {
      case "Jan":
      monthOfBirth += "01";
      break;
      case "Feb":
      monthOfBirth += "02";
      break;
      case "Mar":
      monthOfBirth += "03";
      break;
      case "Apr":
      monthOfBirth += "04";
      break;
      case "May":
      monthOfBirth += "05";
      break;
      case "Jun":
      monthOfBirth += "06";
      break;
      case "Jul":
      monthOfBirth += "07";
      break;
      case "Aug":
      monthOfBirth += "08";
      break;
      case "Sep":
      monthOfBirth += "09";
      break;
      case "Oct":
      monthOfBirth += "10";
      break;
      case "Nov":
      monthOfBirth += "11";
      break;
      case "Dec":
      monthOfBirth += "12";
      break;
  }
  if (data[4] === "F") {
    monthOfBirth[0] === "0" ? monthOfBirth = monthOfBirth.replace(/^\w{1}/g, "5") : monthOfBirth = monthOfBirth.replace(/^\w{1}/g, "6");
  } 
  const dateOfBirth = data[3][0] + data[3][1];
  const birthsYearDigit = data[3][data[3].length - 1];
  let initials = data[0][0];
  data[1][0] ? initials += data[1][0] : initials += "9";
  const arbitraryDigit = "9";
  const pcCheckDigit = "AA";
  
  return `${fiveCharSurname}${birthDecadeDigit}${monthOfBirth}${dateOfBirth}${birthsYearDigit}${initials}${arbitraryDigit}${pcCheckDigit}`;
}

/*
Podia ter usado mais slice(), new Date, getMonth()...
*/