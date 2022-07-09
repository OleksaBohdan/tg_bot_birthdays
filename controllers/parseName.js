module.exports = function parseName(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 1 || arr[i].length > 35) {
      throw new Error('Invalid name: name must be between 1 and 35 characters.');
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'Бодун' || arr[i] == 'бодун' || arr[i] == 'Bodun') {
      throw new Error(`Введено запрещенное имя! Сам ты ${arr[i]}! `);
    }
  }

  const str = arr.join(' ');
  if (str == ' ') {
    throw new Error('Invalid name: name must be between 1 and 35 characters.');
  } else {
    return str;
  }
};
