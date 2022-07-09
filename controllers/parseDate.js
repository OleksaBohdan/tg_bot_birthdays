module.exports = function parseDate(dateString) {
  const dateLength = dateString.length;
  const thisYear = new Date().getFullYear();

  function checkDateAndMonthAndYear(year, month, date) {
    if (month <= 0 || month > 12) {
      throw new Error(`Uncorrect Date format: month is to big or to small: "${month}"`);
    }
    if (date <= 0 || date > 31) {
      throw new Error(`Uncorrect Date format: day is to big or to small: "${date}"`);
    }

    if (year != undefined) {
      if (year <= 1899 || year > thisYear) {
        throw new Error(`Uncorrect Date format: year is to big or to small: "${year}"`);
      }
    }
  }

  if (dateLength === 4) {
    const year = undefined;
    const month = dateString.substr(0, 2);
    const date = dateString.substr(2, 2);
    checkDateAndMonthAndYear(year, month, date);
    return `${1900}-${month}-${date}`;
  } else if (dateLength === 8) {
    const year = dateString.substr(0, 4);
    const month = dateString.substr(4, 2);
    const date = dateString.substr(6, 2);
    checkDateAndMonthAndYear(year, month, date);
    return `${year}-${month}-${date}`;
  } else {
    throw new Error(`Uncorrect Date format`);
  }
};
