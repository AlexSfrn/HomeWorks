let item_1 = 5;
console.log(item_1);
let item_2 = 3;
console.log(item_2);
let item_3 = item_1 + item_2;
console.log(item_3);
let item_4 = "Yolochka";
console.log(item_4);
console.log(item_3 + item_4);
let item_5 = item_3;
let item_6;
let item_6_type;
item_6 = 15;
item_6_type = typeof item_6;
console.log("item_6 == " + item_6);
console.log("item_6_type == " + item_6_type);
let item_7 = String(item_6);
let item_7_type = typeof item_7;
console.log("item_7 == " + item_7);
console.log("item_7_type == " + item_7_type);

const age_1 = 10;
const age_2 = 18;
const age_3 = 60;
if (age_1 < age_2) {
    console.log("You don't have access cause your age is " + age_1 + "." + " It's less then " + age_2 + ".")
} else if (age_1 >= age_2, age_1 < age_3) {
    console.log("Welcome!")
} else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel.")
} else { console.log("Technical work.") }


/* 1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61 */

const CheckAge = function(age) {
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + "." + " It's less then " + age + ".")
    } else if (age >= age_2, age < age_3) {
        console.log("Welcome!")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel.")
    } else { console.log("Technical work.") }
}

CheckAge(17)
CheckAge(18)
CheckAge(60)


/* 2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка. */

const CheckAge_Numb1 = function(age) {
    if (typeof(age) != 'number') {
        console.log("Error")
    } else if (age < age_2) {
        console.log("You don't have access cause your age is " + age + "." + " It's less then " + age_2 + ".")
    } else if (age >= age_2, age < age_3) {
        console.log("Welcome!")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel.")
    } else {
        console.log("Technical work.")
    }
}

CheckAge_Numb1(44)
CheckAge_Numb1(64)
CheckAge_Numb1("eiu")
CheckAge_Numb1("44")
CheckAge_Numb1(60)
CheckAge_Numb1(NaN)


/* 3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number 2 */

// вариант 1

const CheckAge_Numb2 = function(age) {
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + "." + " It's less then " + age_2 + ".")
    } else if (age >= age_2, age < age_3) {
        console.log("Welcome!")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel.")
    } else if (typeof(age) != 'number') {
        console.log('Error')
    } else { console.log("Technical work.") }
}

CheckAge_Numb2(25)
CheckAge_Numb2('25')
CheckAge_Numb2(14)
CheckAge_Numb2(74)
CheckAge_Numb2(60)
CheckAge_Numb2('22ivrei')
CheckAge_Numb2(true)
CheckAge_Numb2(NaN)

// вариант 2

const CheckAge_Numb2 = function(age) {
    typeof(age) == Number; // или +age
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + "." + " It's less then " + age_2 + ".")
    } else if (age >= age_2, age < age_3) {
        console.log("Welcome!")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel.")
    } else if (age != 'number') {
        console.log('Error')
    } else { console.log("Technical work.") }
}

CheckAge_Numb2(25)
CheckAge_Numb2('25')
CheckAge_Numb2(14)
CheckAge_Numb2(74)
CheckAge_Numb2(60)
CheckAge_Numb2('22ivrei')
CheckAge_Numb2(true)
CheckAge_Numb2(NaN)


/* 4***:
Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке */

let age = prompt("Enter your age");
//age = age.replace(/(^"|"$)/g, '');
if (+age) {
    if (age < age_2) {
        alert("You don't have access cause your age is " + age + "." + " It's less then " + age_2 + ".")
    } else if (age >= age_2, age < age_3) {
        alert("Welcome!")
    } else if (age > age_3) {
        alert("Keep calm and look Culture channel.")
    } else {
        alert("Technical work.")
    }
} else {
    alert("Error")
}