module.exports = function mapBdlist(list) {
  const date = new Date(list.birthdayDate);
  let bdDay = '';
  if (date.getFullYear() != 1900) {
    bdDay = `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`;
  } else {
    bdDay = `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}`;
  }

  const str = `${list.birthdayBoy} ${bdDay}`;
  return str;
};
