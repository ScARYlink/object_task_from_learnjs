/*
Создайте функцию isEmpty(obj), которая возвращает true,
если в объекте нет свойств и false – если хоть одно свойство есть.
*/

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
    }
var schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "подъём";
alert( isEmpty(schedule) ); // false

/*
Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
Если объект пустой, то результат должен быть 0.
 */

"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var sum = 0;
for (key in salaries) {
    sum += salaries[key];
}
console.log(sum);