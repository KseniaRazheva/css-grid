'use strict';

//const arr = [5, 5, 5];

//function grvr() {
    
//}

//const str = "dfghhffds";

// установила расширение eslint
// npm init
// npm init @eslint/config

// появились файлы package-lock.json, package.json, .eslintrc.js
// в .eslintrc.js комментирую // "extends": "eslint:recommended",


//урок 21. Логические операторы (33 минуты)


//script.js


// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// } 
//Я сыт! так как условие выполнено и hamburger true & fries true


// console.log((hamburger && fries)); //true просто вернуло логический тип данных, результат логических операций - логическое булевое значение
// если одно из блюд будет отсутствовать мы получим false


// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// } //результата нет в консоли потому что условие не выполнилось а блока else нет


// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }
// console.log((hamburger && fries)); // false


// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }
// //ответа нет так как условие не может быть выполнено, это подводит к теме "динамическая типизация в джаваскрипте" которую будем изучать позднее, строка может стать числом, число может стать строкой, что угодно может стать логическим значением
// humburger & fries нужно если сайт будет по продаже товаров, показывать пользователю информацию сколько товаров есть на сайте и что делать если нет картошки и вместо сообщения "я сыт" пользователю будет написано "товар закончился на складе"

// пять сущностей которые всегда будут false: 
// 0, 
// пустая строка "", 
// null(нулевой), 
// undefined(неопределенный), 
// NaN (not a number - не число)
// все остальное всегда будет true

// таблица приоритетов операторов https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// строго равно === это пункт 10,
// логическое И && это пункт 6
// приоритет 20 самый высокий, значит вначале выполнится пункт 10 строго равно, а только потом пункт 6 логическое и, пункт 1 внизу и выполняется самым последним


// const hamburger = 2;
// const fries = 1;

// if (hamburger === 3 && fries === 1) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим');
// } // так как в кафе есть только 2 гамбургера и 1 картошка, а нам надо 3 гамбургера и 1 картошку - условие не выполнено (мы не получаем что хотим) поэтому - мы уходим. так же можно было в скобках условия if написать (hamburger === 3 && fries)


// const hamburger = 2;
// const fries = 1;

// if (hamburger === 3 && fries === 1) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим');
// } // так как в кафе есть только 2 гамбургера и 1 картошка, а нам надо 3 гамбургера и 1 картошку - условие не выполнено (мы не получаем что хотим) поэтому - мы уходим. так же можно было в скобках условия if написать (hamburger === 3 && fries)


// оператор И возвращает первое ложное значение на котором он остановил свою работу:
// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries) //0 (это значение колы)

// console.log(1 && 0); //0 так как 1 это всегда true, а 0 это всегда false а значит ноль

// console.log(1 && 5); // true и консоль возвращает последнее значение а это 5

// console.log(null && 5);// null - сравниваем неправду (нул это ничего) и что-то и консоль возвращает первое неправильное значение false

// console.log(0 && 'hdxtyhjx');//0 - сравниваем 0 неправду false и строку и поэтому получаем ноль потому что оператор && и запнулся на первом неправдивом значении


// и запинается на лжи, или запинается на правде


// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим');
// }
// // Все довольны! (так как нам нужен гамбургер или кола или картошка)


// const hamburger = 0;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим');
// }
// // Мы уходим (так как условие не выполнилось, нам нужен гамбургер или кола или картошка)


// const hamburger = 0;
// const fries = null;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим');
// }

// console.log(hamburger | | cola | | fries);
// // 
// Мы уходим 
// null
// последнее значение которое возвращает ложь это fries и его ответ это null


// let johnReport, alexReport, samReport, mariaReport = 'done';
// console.log(johnReport | | alexReport | | samReport | | mariaReport); //done


// приоритет операторов:
// вначале сравнение строго равно === пункт 10
// потом логическое И && пункт 6
// и только потом логическое ИЛИ | | пункт 5


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 | | fries === 3 && nuggets) {
//     console.log('Все довольны');
// } else {
//     console.log('Мы уходим');
// } //Все довольны
// (правда и неправда) или (правда и правда)
// false или true


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); //2
// //правда и неправда это false про этот кусок забываем и смотрим на правый кусок там правда и правда, первая правда = 3, вторая правда = 2 и в итоге консольлог возвращает ответом последнюю правду = 2 (сравнивает левый кусок там ложь и правый кусок там два и возвращает первое правдивое выражение = 2)


// самый высокий приоритет у скобок ( )
// например
// console.log(hamburger === 3 && (cola === 2 | | fries === 3) && nuggets);
// то порядок операторов поменяется 
// вначале сравнение (кола=2 нет) или (фри=3 да)


// оператор не !
// console.log(!0); //true
// не ноль
// вначале аргумент к которому он применен он превращает в логический тип данных либо тру либо фолз и после этого оператор возвращает противоположное значение


//доделала урок 21 логические операторы 33 минуты (делала минимум 4 помидора)
//петриченко предлагает сделать в консоли задачи (делала минимум 2 помидора)

//console.log(NaN || 2 || undefined ); //2 так как не число или 2 или неопределенный единственное тру возвращается 2

// console.log( NaN && 2 && undefined ); //NaN так как не число и 2 и неопределенный - И запинается на первой лжи?

//console.log( 1 && 2 && 3 ); //3-1и2и3 вернуло последнее значение?

//console.log( !1 && 2 || !3 ); //false - 
//!-логическое отрицание НЕ 1 (пункт14)
//&&-логическое И (пункт4)
//||-логическое ИЛИ (пункт3)
//!-логическое отрицание НЕ 3 (пункт14)
//вначале читаем НЕ1 И 2 ИЛИ НЕ3 

//console.log( 25 || null && !3 ); //25
//25
//ИЛИ
//null-обозначение отсутствия значения (не ноль) 
//И
//НЕ3
//25 ИЛИ отсуствие значения И НЕ 3 = 25

//console.log( NaN || null || !3 || undefined || 5 );//5
//NaN - не число
//null-обозначение отстуствия значения (не ноль) (умышленное отстуствие значения)
//!3 = НЕ 3
//undefined -не определено значение (неожиданное отстуствие значения)
//5
//не число ИЛИ отсутствует значение ИЛИ не3 ИЛИ не определено значение ИЛИ 5 = 5
//у логического отрицания ! приоритет выше чем у ИЛИ ||

//console.log( NaN || null && !3 && undefined || 5 );//5
//&& логическое И приоритет выше чем у || лигическое ИЛИ
//у НЕ ! самый высокий приоритет
//отсутствие значение И не3 И не определено значение ИЛИ не число ИЛИ 5 = 5

//console.log( 5 === 5 && 3 > 1 || 5 );//true
//> больше пункт 9
//=== строгое равенство пункт 8
//&& логическое И пункт 4
//|| логическое ИЛИ пункт 3
//итого 5 строго равно 5 И 3 больше 1 ИЛИ 5 = true И true ИЛИ 5 = true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
// 	console.log('Done!');
// }
//Done! если гамбургеров 3 и 1 кола ИЛИ 3 фри и 1 наггетс = done

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
// 	console.log('Done!');
// }
//Done! 
//=== строгое равенство пункт 8 (вначале фри = 3 false)
//|| логическое ИЛИ пункт 3 (потом 1 гамбургер фолз ИЛИ 1 кола фолз ИЛИ 3 фри фолз ИЛИ 1 наггетс тру - есть одно тру значит Done)
//переменная hamburger задана через let так как const требует какое-либо начальное значение, если const hamburger;-будет ошибка так как без значения там undefined - неожиданное отстутствие значения

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
// 	console.log('Done!');
// }
//нет ответа
//=== строгое равенство пункт8 - вначале выполняется фри=3 это фолз
//&& логическое И пункт4 - потом выполняется гамбургер=1 и кола=1 это фолз, фри=3 и 1 наггетс это фолз
//|| логическое ИЛИ пункт3 - потом выполняется фолз или фолз

// const hamburger = 1;
// const fries = 1;
// const cola = 1;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
// 	console.log('Done!');
// }
//Done


//урок 23 цикл в цикле и метки


// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}
// }
// //0 - первый цикл
// //0 - второй цикл
// //1 - второй цикл
// //2 - второй цикл доходит до 2 меньше 3
// //1 - первый цикл 0+1=1
// //0 - начинается второй цикл
// //1 - второй цикл
// //2 - второй цикл доходит до 2 меньше 3
// //2 - начинается первый цикл 1+1=2 (первый цикл дает ответ в последний раз, i = 2 это меньше 3)
// //0 - начинается второй цикл с 0
// //1 - второй цикл
// //2 - второй цикл доходит до j= 2 это меньше 3, а первый цикл не начинается потому что он уже вернул ранее 2 меньше 3


// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

// 	for (let j = 0; j < i; j++) {
// 		result += '*';
// 	}

// 	result += '\n';
// }

// console.log(result);
// //*
// //**
// //***
// //****
// //*****
// //******


// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0; k < 3; k++) {
// 			if (k === 2) continue first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }
// //First level: 0
// //Second level: 0
// //Third level: 0
// //Third level: 1
// //First level: 1
// //Second level: 0
// //Third level: 0
// //Third level: 1
// //First level: 2
// //Second level: 0
// //Third level: 0
// //Third level: 1
// //третий уровень доходит только до 1 меньше 2


// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0; k < 3; k++) {
// 			if (k === 2) break first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }
// //First level: 0
// //Second level: 0
// //Third level: 0
// //Third level: 1


// //Задачи:


// //При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// for (let i = 5; i < 11; i++) {
// 	console.log(i);
// }
// //5
// //6
// //7
// //8
// //9
// //10


// //При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// first: for (let i = 20; i >= 10; i--) {
// 	if (i === 13) break first;
// 	console.log(i);
// }
// //20
// //19
// //18
// //17
// //16
// //15
// //14


// //При помощи цикла for выведите чётные числа от 2 до 10 включительно
// for (let i = 2; i <= 10; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }
// //2
// //4
// //6
// //8
// //10


// //Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// //Цикл, который нужно переписать:
// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }
// //3
// //5
// //7
// //9
// //11
// //13
// //15
// let i = 2;
// while (i <= 16) {
// 	if (i % 2 === 0) {
// 		i++;
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// 	i++;
// }
// //3
// //5
// //7
// //9
// //11
// //13
// //15


// //Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
// const arrayOfNumbers = [];
// for (let i = 5; i < 11; i++) {
// 	arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);
// return arrayOfNumbers; 
// //parding error: 'return'outside of funstion eslint - добавила в .eslintrc.js в parserOptions - ecmaFeatures - globalReturn true
// //[ 5, 6, 7, 8, 9, 10 ]


//упражнение по написанию кода 4 * продвинутые задания на использование циклов и условий
//Задачи:


// //1. Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд. Должен получиться точно такой же массив
// // Место для первой задачи
// // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
// 	result[i] = arr[i];
// }
// console.log(result);
// return result;
// //[
// //    3,  5,  8, 16,
// //   20, 23, 50
// // ]


// // 2.Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// // Для определения типа данных используйте typeof();
// // Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
// // Место для второй задачи
// // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
// 	if (typeof(data[i]) === 'number') {
// 		data[i] = data[i] * 2;
// 	} else if (typeof(data[i]) === 'string') {
// 		data[i] = `${data[i]} - done`;
// 	}
// }
// console.log(data); 
// return data;
// //[ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


// //3. Разверните массив data наоборот при помощи цикла и запишите данные в массив result. 
// //Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
// // Место для третьей задачи
// // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
// 	result[i - 1] = data[data.length - i];
// }
    
// console.log(result);
// return result;
// //[ 'Homework', 20, 'Shopping', 10, 5 ]


// ///упражнение по написанию кода 5 ** задача на формирование фигуры
// //Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:
// //     *
// //    ***
// //   *****
// //  *******
// // *********
// //***********
// //Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. 
// //В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС
// // Проверяется именно переменная result, формируйте строку в ней
// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
// 	for (let j = 0; j < lines - i; j++) {
// 		result += ' ';
// 	}
// 	for (let k = 0; k < 2 * i + 1; k++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }
// console.log(result);


// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr); //500*28=14000
// convert(500, eurCurr); //500*32=16000

// // Упражнение по написанию кода 7:(*) Продвинутые задания на использование функций

// //Задачи:

// //1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
// //Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// //НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
// //Примеры:
// //calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// //calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// //calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// //calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// //calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0;
//     let area = 0;

//     volume = length * length * length; 
//     //length ** 3 - тоже самое, ** - оператор степени, но онлайн редактор его не понимает
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(5);
// calculateVolumeAndArea(15);
// calculateVolumeAndArea(15.5);
// calculateVolumeAndArea('15');
// calculateVolumeAndArea(-15);

// //Expected 'Объем куба: 0, площадь всей поверхности: 0' to equal 'Объем куба: 125, площадь всей поверхности: 150'.
// //Expected-Ожидал, to equal-в равной
// //забыла length в скобках function calculateVolumeAndArea(length) {

// //2) Напишите функцию, которая будет определять номер купе по переданному ей номеру места. 
// //Функция принимает только целое число от 1 до 36.
// //Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение: "Ошибка. Проверьте правильность введенного номера места"
// //Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
// //Пример:
// //getCoupeNumber(33)  => 9
// //getCoupeNumber(7)  => 2
// //getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// //getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// //getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// //getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// //getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
// }

// getCoupeNumber(33);
// //typeof (оператор возвращает строку указывающую тип операнда 42-number, 'blubber'-string, true-boolean, undeclaredVariable-undefined)
// //sInteger() определяет, является ли значение целым числом.

// //создаю функцию getCoupeNumber с аргументом seatNumber
// //если тип данных аргумента не номер И аргумент меньше нуля И аргумент НЕ является целым числом - ТОГДА ОШИБКА
// //если аргумент строго равно 0 И больше 36 - НЕ СУЩЕСТВУЕТ
// //вернуть округление дробного числа до целого всегда в большую сторону значение аргумента деленное на 4 это будет номер купе
// //вызов функции


// Упражнение по написанию кода 8: (*) Продвинутые задания на использование функций
//Задачи:
// //1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// //Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// //Пример:
// //getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// //getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// //getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// //getTimeFromMinutes(-150) => "Ошибка, проверьте данные"


// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(180)); //Это 3 часа и 0 минут



// //2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// //Пример:
// //findMaxNumber(1, 5, 6.6, 11); =>  11
// //findMaxNumber(1, 5, '6', '10');  =>  0

// function findMaxNumber(a, b, c, d) {
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b, c, d);
//     }
// }

// console.log(findMaxNumber(1, 5, 6.6, 10.5));//10.5
// console.log(findMaxNumber(1, 5, '6', '10'));//0



// //(**) Задача с собеседований на числа Фибоначчи
// //числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. 
// //решение БЕЗ рекурсии
// //Задача:
// //Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу. Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
// //Пример:
// //fib(4) => ''0 1 1 2"
// //fib(7) => ''0 1 1 2 3 5 8"
// //fib('7') => ''"
// //fib(1) => "0"
// //fib(0) => ''"

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`; //без пробела вконце
//         } else {
//             result += `${first} `;//с пробелом вконце
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// console.log(fib(5));//0 1 1 2 3



// //l.31 callback-функции

// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();
// //2
// //1
// //то есть вначале выполняется вторая функция, а потом задержка на 500миллисекунд/1000=0,5секунд и выполняется первая функция, то есть запускаются одна за другой, но результат могут отдать в разное время
// //колбэк - функция которая должна быть выполнена после того как другая функция завершила свое выполнение 

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function() {
//     console.log('Я прошла этот урок!');
// });
// // учу: JavaScript
// //Я прошла этот урок!



// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошла этот урок!!');
// }

// learnJS('JavaScript', done);
// //Я учу: JavaScript
// //Я прошла этот урок!!



//l.32 Объекты, деструктуризация объектов (ES6)

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

//console.log(options.name);//test

// delete options.name; //удалить свойство name объекта options
// console.log(options); //{ width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }

//перебрать все свойства объекта конструкция фор ин
//ключевое слово for в круглых кнопках настроить наш цикл здесь мы укажем в какой объекте мы будем перебирать эти свойства и как каждое свойство нам назвать общее слово key ключ (ключ-значение) чтобы перебирать ключи переменная key и будем копаться внутри options раскрываем конструкцию и задаем что будет выполняться цикл будет работать столько раз сколько свойств внутри объекта выводим в консоль конструкцию свойство перебираем каждое отдельное свойство key имеет значение что за значение находится в свойстве key - пользуемся конструкцией работаем в объете опшинс значение этого ключа который перебирается в этом повторении цикла
//`` бэктики

//for (let key in options) {
//    console.log(`Свойство ${key} имеет значение ${options[key]}`);
//}
//ответ: 
//Свойство name имеет значение test
//Свойство width имеет значение 1024
//Свойство height имеет значение 1024
//Свойство colors имеет значение [object Object]

//свойство for (let key of options) {} - для объектов работать не будет
//[object Object]- сейчас все значения выводим в качестве строк, но одно из свойств объекта тоже является объектом, когда код натыкается на такой объем он не может его превратить в строку и в вывод выводит такую структуру (строковое представление объекта) не ошибка, а объект который код не может превратить в строчку



// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }
// // console.log(options["colors"]["border"]);//black
// //элз - если ключ наш не будет объектом то мы просто выводим так как это было раньше
// //ответ:
// // Свойство name имеет значение test
// // Свойство width имеет значение 1024
// // Свойство height имеет значение 1024
// // Свойство border имеет значение black
// // Свойство bg имеет значение red


// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);
// //посчитаем количество свойств с помощью цикла
// //ответ:
// //Свойство name имеет значение test
// //Свойство width имеет значение 1024
// //Свойство height имеет значение 1024
// //Свойство border имеет значение black
// //Свойство bg имеет значение red
// //5-потому что считывает 2 уровень вложенности (name, width, height, border, bd) - и внутри for есть counter и внутри else, если оставить только в else - будет считать только первый уровень name, width, height, colors и выдаст результат - 4



// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);
// //ответ 3
// //что-то пошло не так, программа начала считать: name width height - уткнулась в объект и пошла по другому разветвлению условия if  выдала результат

// //классический способ узнать количество ключей
// let counter = 0;
// for (let key in options) {
//     counter++;
// }
// console.log(counter);
// //ответ 4
// //но это не удобно, есть метод:

// console.log(Object.keys(options));
// //[ 'name', 'width', 'height', 'colors' ] //получаем массив с ключами
// //у массива есть свойство length-узнать количество элементов


// console.log(Object.keys(options).length);
// //4



// //методы это действия которые умеет совершать наш объект
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };
// options.makeTest();
// //Test

//объекты - структуры которые могут сохранять в себе любые типы данных в формате ключ-значение, они также могут быть вложенные объекты в объекты, массивы в объекты и тд. чтобы их перебрать можем использовать конструкцию фор ин и делать что угодно с ключами key и значениями. получать свойства можем через точку или квадратные скобки. у объектов бывают встроенные методы и встроенные свойства, чтобы объект что-то умел мы можем внутрь него записывать функции и таким образом создавать методы нашего объекта. свойства акцессоры - гэт и сэт, деструктуризация объекта

// //деструктуризация объекта - достучаться до вложенных свойств:
// const {border, bg} = options.colors;
// //переменная {те переменные которые хочу вытащить} присвоить ту структура из которой хочу сделать более мелкие кусочки из свойства option colors
// console.log(border);//black

//джаваскрипт считается объектно-ориентированным языком и все сущности которые в нем есть сводятся к объектам. но правильнее считать прототипно-ориентрованным



// let number = 1;
// //console.log(--number);//0-отдельно
// //console.log(number++);//1-отдельно
// //console.log(++number);//2-отдельно

// console.log(--number);//0-подряд
// console.log(number++);//0-подряд
// console.log(++number);//2-подряд


//урок 33. Массивы и псевдомассивы

//const arr = [1, 2, 3, 6, 8]; //массив набор чисел

//arr.pop();//[ 1, 2, 3, 6 ] метод удаляет последний элемент массива
//arr.push(10);//[ 1, 2, 3, 6, 8, 10 ] метод добавляет элемент (в скобках что добавить)
//console.log(arr);
//чтобы добавить в начало элемент не достаточно его вписать, еще и у последнующих ранее вставленных элементов меняются индексы 0=1, 1=2, 2=3, 3=6, 4=8

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// //1
// //2
// //3
// //6
// //8


// for (let value of arr) {
//     console.log(value);
// }
// //1
// //2
// //3
// //6
// //8
// //конструкция for of работает только с массиво подобными сущностями, с помощью фор оф нельзя перебрать объекты, но можно: массив, строку, псевдомассивы, мэп и сэт.
//можно использовать break, continue


//console.log(arr.length);//5-длина массива
// arr[99] = 0;
// console.log(arr.length);//100 отому что свойство лэнг происходит от последнего индекса плюс 1
// console.log(arr); //[ 1, 2, 3, 6, 8, <94 empty items>, 0 ] //нарушение, элементы лежат не по порядку



// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// //0: 1 внутри массива 1,2,3,6,8
// //1: 2 внутри массива 1,2,3,6,8
// //2: 3 внутри массива 1,2,3,6,8
// //3: 6 внутри массива 1,2,3,6,8
// //4: 8 внутри массива 1,2,3,6,8
// //метод позволяет отдельно задать класс разным элементам
// //break, continue не работают



// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);
// //промпт в консоли вскода не работает, только всплывающими окнами в браузере
// //всплывает окно, в нем я ввожу товары через запятую: qqq, www, eee окей и открываю консоль которая возвращает массив array 
// //0: "qqq"
// //1: "www"
// //2: "eee"


// //метод join объединение элементов в массив и разделитель в скобочках с помощью которого будут выводиться элементы
// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products.join('; '));
// //в всплывающем на странице окне ввожу www, www, rrr, vvv
// //в консоли мне отвечают: www; www; rrr; vvv

//метод сорт
// const str = prompt("", "");
// const products = str.stlit(", ");
// products.sort();
// console.log(products.join('; '));
// //в всплывающем окне на странице ввожу qqq, aaa, bbb нажимаю окей и в консоли:
// // aaa; bbb; qqq
// //строчные элементы сортируются по алфавиту

// const arra = [2, 13, 26, 8, 10];
// arra.sort();
// console.log(arra);
// //[ 10, 13, 2, 26, 8 ]
// //очень странная сортировка, каждое число которое начинается с единички встало на первое место 10 и 13 по первому символу равны дальше 0 и 3 - 0 идет перед 3

// const arra = [2, 13, 26, 8, 10];
// arra.sort(compareNum);
// console.log(arra);

// function compareNum(a, b) {
//     return a - b;
// }
// //[ 2, 8, 10, 13, 26 ]




//урок 35 передача по ссылке и по значению, spread оператор (ES6-ES9)

// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);//10
// console.log(a);//5



// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj;//ссылку
// copy.a = 10;
// console.log(copy);//{ a: 10, b: 1 }
// console.log(obj);//{ a: 10, b: 1 }
// //не получилось. а как копировать объект?



// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);//{ a: 10, b: 5, c: { x: 7, y: 4 } }
// console.log(numbers);//{ a: 2, b: 5, c: { x: 7, y: 4 } }
//a - поменялось



// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers);//{ a: 10, b: 5, c: { x: 10, y: 4 } }
// console.log(numbers);//{ a: 2, b: 5, c: { x: 10, y: 4 } }
// //a - поменялось
// //x внутри c - перезаписалось в старом и новом при том что в старом было записано 7
// //когда копируем объекты есть глубокие и поверхностные копии объектов
// //сейчас создали поверхностную копию
// //потом научимся создавать глубокую копию чтобы изменять скопированный объект



// //Метод Object. assign() используется для копирования свойств из одного или нескольких объектов в объект, переданный в метод первым аргументом.
// //соединить два объекта в один
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// const add = {
//     d: 17,
//     e: 20
// };
// // console.log(Object.assign(numbers, add));
// // //{ a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }
// const clone = Object.assign({}, add);
// clone.d = 33;
// // console.log(add);//{ d: 17, e: 20 }
// // console.log(clone);//{ d: 33, e: 20 }



// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'asdfghj';
// console.log(newArray);//[ 'a', 'asdfghj', 'c' ]
// console.log(oldArray);//[ 'a', 'b', 'c' ]



// spread оператор или оператор разворота
//1 вариант:
// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);
// //[
// //    'youtube',
// //    'vimeo',
// //    'rutube',
// //    'wordpress',
// //    'livejournal',
// //    'blogger',
// //    'vk',
// //    'facebook'
// //  ]
//2 вариант:
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);
// //2
// //5
// //7
//3 вариант:
// const array = ["a", "b"];
// const newArray = [...array];
// console.log(array);//[ 'a', 'b' ]
// console.log(newArray);//[ 'a', 'b' ]
//4 вариант:
// const objQ = {
//     one: 1,
//     two: 2
// };
// const newObjQ = {...objQ};
// console.log(objQ);//{ one: 1, two: 2 }
// console.log(newObjQ);//{ one: 1, two: 2 }



// //упражнение по написанию кода 10: задачи на работу с объектами
// //Задачи:
// //1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом. 
// //Пример: showExperience(personalPlanPeter) => '1 month'
// //желательно использовать деструктуризацию, но не обязательно
// //2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// //Пример: showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"
// //Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка. Для переноса строки используется \n в конце строки.
// //3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// //Пример: personalPlanPeter.showAgeAndLangs(personalPlanPeter) => 'Мне 29 и я владею языками: RU ENG'
// //Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); //Мне 29 и я владею языками: RU ENG 

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter)); //1 month

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
//     return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));
// //Язык js изучен на 20%
// //Язык php изучен на 10%


