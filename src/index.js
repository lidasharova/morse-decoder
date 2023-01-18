const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

//решение = получается фраза но без пробелов ( 40 passing 10 failing)

function decode(expr) {
  let decoder = expr.split(''); //получаем массив из строки

  //разбиваем массив на  10 подмассивов (тк 10 символов в 1 букве)
  const array_size = 10;
  const sliced_array = [];

  for (let i = 0; i < decoder.length; i += array_size) {
    sliced_array.push(decoder.slice(i, i + array_size));
  }
  //переводим в строки все подмассивы
  let stringArray = sliced_array.map((arr) => arr.join());

  //убираем запятые в каждой строке
  let strArray = stringArray.map((str) => str.replace(/,/g, ''));

  //меняем в каждой строке 10 на .  11 на  - и убираем осташиеся нули
  let morzeArray = strArray.map((strr) =>
    strr.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '')
  );

  //создаем массив из букв из объекта MORSE_TABLE.[ключ]

  let letterArray = [];
  morzeArray.map((e) => {
    letterArray.push(MORSE_TABLE[e]);
  });

  //соединяем массив в строку и убираем запятые
  let phrase = letterArray.join();
  let phraseWithoutSpace = phrase.replace(/,/g, '');
  return phraseWithoutSpace;
}

module.exports = {
  decode,
};
