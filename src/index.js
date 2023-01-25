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

//1 решение = получается фраза но без пробелов ( 40 passing 10 failing)

// function decode(expr) {
//   let decoder = expr.split(''); //получаем массив из строки

//   //разбиваем массив на  10 подмассивов (тк 10 символов в 1 букве)
//   const array_size = 10;
//   const sliced_array = [];

//   for (let i = 0; i < decoder.length; i += array_size) {
//     sliced_array.push(decoder.slice(i, i + array_size));
//   }
//   //переводим в строки все подмассивы
//   let stringArray = sliced_array.map((arr) => arr.join());

//   //убираем запятые в каждой строке
//   let strArray = stringArray.map((str) => str.replace(/,/g, ''));

//   //меняем в каждой строке 10 на .  11 на  - и убираем осташиеся нули
//   let morzeArray = strArray.map((strr) =>
//     strr.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '')
//   );

//   //создаем массив из букв из объекта MORSE_TABLE.[ключ]

//   let letterArray = [];
//   morzeArray.map((e) => {
//     letterArray.push(MORSE_TABLE[e]);
//   });

//   //соединяем массив в строку и убираем запятые
//   let phrase = letterArray.join();
//   let phraseWithoutSpace = phrase.replace(/,/g, '');
//   return phraseWithoutSpace;
// }

//2решение

function decode(expr) {
  //получаем массив из обьектов по 10 символов(тк одна буква =10),каждую итерацию прибавляя в пустой массив по 10 последующих символов)
  let arrOfTen = []; //пустой массив для хранения обьектов по 10 символов
  let result = ''; //переменная для хранения итоговой фразы

  for (let i = 0; i < expr.length; i += 10) {
    arrOfTen.push(expr.slice(i, i + 10));
  }
  //создадим фразу из символов морзе, проходясь по каждым двум символам и когда будет количество 8 знаков то заменим морзе на букву

  for (let l = 0; l < arrOfTen.length; l++) {
    //цикл для каждого обьекта в массиве
    let phraseMorse = ''; //переменная для хранения 8 символов переделанных в морзе
    for (let a = 0; a < 9; a += 2) {
      //цикл прохода по каждой паре знаков, заменяя на морзе или пропуская 00 или добавляя пробел вместо к итоговой фразе
      if (arrOfTen[l][a] + arrOfTen[l][a + 1] === '00') {
        continue;
      }
      if (arrOfTen[l][a] + arrOfTen[l][a + 1] === '**') {
        result += ' ';
        break;
      }
      if (arrOfTen[l][a] + arrOfTen[l][a + 1] === '10') {
        phraseMorse += '.';
      }
      if (arrOfTen[l][a] + arrOfTen[l][a + 1] === '11') {
        phraseMorse += '-';
      }
      if (a === 8) {
        //когда индекс цикла равен 8, то полученную шифровку на морзе заменяем на обычную букву
        phraseMorse = MORSE_TABLE[phraseMorse];
        result += phraseMorse;
      }
    }
  }
  return result;
}

module.exports = {
  decode,
};
