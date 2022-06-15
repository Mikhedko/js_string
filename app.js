//Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и ﻿количество других знаков


function analyzeString(str){
    const letters = ['a', 'b', 'c', 'd', 'i', 'e', 'f', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'v', 'w', 'x', 'y', 'z'];
    const numbers = ['1', '2', '3', '4', '5', '6','7','8','9', '0'];
    let div = str.split('');
    let letterCount = 0;
    let numberCount = 0;
    div.forEach((stringItem) => {
        letters.forEach((letterItem) => {
            if (stringItem == letterItem) {
                letterCount++;
            }
        });  
    });
    div.forEach((stringItem) => {
        numbers.forEach((numbersItem) => {
            if (stringItem == numbersItem){
                numberCount++;
            }
            
        });
    });

    return console.log(`number of letters ${letterCount}, number of numbers ${numberCount}, other symbols ${div.length - letterCount - numberCount}`);
}

const string = "kkdkdkkdkkfk234k45,5k5k;";

analyzeString(string);

//Написать функцию, которая принимает двузначное число ﻿и возвращает его в текстовом виде. Например: 35 – тридцать пять, 89 – восемьдесят девять, ﻿12 – двенадцать. 

const from1To9 = ['один','два','три','четыри','пять','шесть','семь','восемь','девять']
const from10To19 = ['десять', 'одинадцать', 'двенадцать', 'тринадцать','четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемьнадцать', 'девятнадцать' ];
const from20To90 = ['двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто']

function numberToLetter(number){
    let letterString;
    if (number >= 10 && number <= 19){
        letterString = from10To19[number-10]; 
    } else if (number >=20 && number <= 99){
        let numberToString = `${number}`;
        numberToString = numberToString.split('');
        let firstNumber = numberToString[0];
        let secondNumber = numberToString[1];
        letterString = `${from20To90[firstNumber-2]} ${from1To9[secondNumber-1]}`
    }
    return letterString;
}

console.log(numberToLetter(19));