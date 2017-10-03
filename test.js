/*
Создайте пустой объект user.
Добавьте свойство name со значением Вася.
Добавьте свойство surname со значением Петров.
Поменяйте значение name на Сергей.
Удалите свойство name из объекта.
*/

var user = {};
user.name = "Вася";
//console.log(user.name);
user.surname = "Петров";
user.name = "Сергей";
//console.log(user.name);
delete user.name;
console.log(user.name);