//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let a = 2;
let b = 1;
while (b < 11) {
    console.log(a ** b);
    b++
}


//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const count1 = function(step) {
    let a = 2;
    let b = 1;
    while (b <= step) {
        console.log(a ** b);
        b++
    }
}

count1(10)


/* 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):) */

let a = ":)";
let b = 1;
while (b <= 5) {
    console.log(a.repeat(b))
    b++
}


//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)

const printSmile = function(stroka, numberOfRows) {
    let a = 1;
    while (a <= numberOfRows) {
        console.log(stroka.repeat(a))
        a++
    }
}

printSmile(":)", 5)


/* 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list' */

const getWordStructure = function(word) {
    let vow = 0;
    let wow = 0;
    for (let num = 0; num < word.length; num++) {
        if (word.charAt(num) == word.charAt(num).match(/['aeiou']/gi)) {
            ++vow
        } else if (word.charAt(num) == word.charAt(num).match(/['bcdfghjklmnpqrstvwxz']/gi)) {
            ++wow
        } else {}
    }
    console.log("Слово " + word + " состоит из " + vow + " гласных и " + wow + " согласных букв")
}
getWordStructure('Check-list')


/* 4**. Написать функцию, которая проверяет, является ли слово палиндромом e.g. function isPalindrom(word)
Проверки: 'abba', 'Abba' */

const isPalindrom = function(word) {
    word = word.toLowerCase()
    var num = 0
    while (num < (word.length / 2)) {
        if (word.charAt(num) === word.charAt(word.length - (num + 1))) {
            num++
        } else {
            break
        }
    }
    if (num >= (word.length / 2)) {
        console.log("Палиндром")
    } else {
        console.log("Не палиндром")
    }
}
isPalindrom('abba')
isPalindrom('abbbba')
isPalindrom('Abba')
isPalindrom('ababa')
isPalindrom('abca')
isPalindrom('a1ba')