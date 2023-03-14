//1//

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let c = +prompt("Введите третье число");

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Вы ввели некорректные значения, попробуйте еще раз");
} else {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  console.log(`Наибольшее число: ${max}`);
}


//2//

let number = +prompt("Введите число от 0 до 5");

switch (number) {
  case 0:
    console.log("Ноль");
    break;
  case 1:
    console.log("Один");
    break;
  case 2:
    console.log("Два");
    break;
  case 3:
    console.log("Три");
    break;
  case 4:
    console.log("Четыре");
    break;
  case 5:
    console.log("Пять");
    break;
  default:
    console.log("Вы ввели неверное число");
    break;
}


//3//


let age = 10;

age < 10 ? console.log('hi!') :
  age < 20 ? console.log('hello!') :
  console.log('good day!');
  
  
  //4//

  let first = prompt("Введите первое число");
let second = prompt("Введите второе число");
let answer = prompt(`Сколько будет ${a} умножить на ${b}?`);

if (answer == a * b) {
  console.log("Правильно!");
} else {
  console.log(`Неправильно, правильный ответ: ${a * b}`);
}
