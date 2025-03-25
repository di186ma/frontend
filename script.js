/* <script src="script.js"></script> */

'use strict';
// console.log("Hello, world1!");
// console.log("Hello, world2!");
// alert("Hello, world2!");

// let name1 = 'Витя', name2 = "Катя", spisok;
// const CONST_NAME = "Игорь";

// name1 = 12.8;

// let flag = true;

// name1 = null;

// spisok = `hello, ${name1}, ${name2}`;

// console.log(spisok);

// typeof 5;

// alert(1);

// let result = prompt("Добрый день!", "Здравствуйте");

// let isconfirm = confirm("Можно сохранить ваши контакты?");

// alert(isconfirm);


// let number = 10;
// number = String(number);
// number = Number(number);
// alert(typeof(number));

// let num1 = "3", num2 = "10";
// alert(num1 * num2);


// let isFlag = 0;
// alert(Boolean(isFlag));

// let num1 = 9, num2 = 100, resultNumber;

// resultNumber = num1 + num2 * num1;
// num1 = -num1;
// alert(num1);


// let str1 = "Hello ", str2 = "World!";
// let str = str1 + str2;
// alert(str);

// alert('1' + '2');

// let x, y, z;

// x = y = z = 80;

// let g = 5 + (z = 3 + 9);
// g +=  10;
// g++;
// g--;

// x = g
// alert(x);
// x = --x;
// alert(x);

// let num56 = (100+200, 300+600);
// alert(num56);

// alert(2 <= 1);

// alert('A' > 'Z');
// alert("ASDFff" < "dfgrihfregfre");
// alert("ASDFff" < "ASDFfa");

// if ('Z' > 'A') alert("Z > A");

//     if (100 > 200) {
//         let text = "Неверно";
//         alert(text);
//     } else if (800 > 1000) {
//         let text = "Неверно";
//         alert(text);
//     } else if (100 > 0) {
//         let text = "Верно";
//         alert(text);
//     }

// let numb = 100;

// if (numb > 50) {
//     alert("больше половины");
// } else {
//     alert("меньше половины");
// }

// numb < 50 ?
//     numb < 25 ? alert("1/4") : alert("2/4") : 
//     numb < 75 ? alert("3/4") : alert("4/4");


// let number = 20;
// if (0 < number && number > 30)
//     alert("Верно");

// if (number != 10)
//     alert("не 10");

// цикл с предусловием
// let numb = 10;
// while (numb > 0) {
//     console.log(numb);
//     numb--;
// }

// цикл с постусловием
// let numb = 10;

// do {
//     console.log(numb);
//     numb--;
// } while (numb > 0);


// for (let i = 0; i < 10; i++) {
//     // if(i == 5) break;
//     if(i == 5) continue;

//     console.log(i);
// }

// console.log("Вышли из цикла for");

// while(true){

// }

// //(-100: 100)
// let numb = -100;
// for(;;){
//     // использовать continue и break
//     // вывести все четные числа
//     // на месте нечетного числа вывести -1
// }


// let namePerson = prompt("Введите Имя:");
// switch(namePerson) {
//     case "Polina":
//         alert("No");
//         break;
//     case "Dima":
//         alert("No");
//         break;
//     case "Ivan":
//     case "Evgeniy":
//         alert("Yes");
//         break;
//     default:
//         alert("default");
//         break;
// }


// let name = "Aleksey";
// function printText() {
//     name = "Timofey";
//     // alert(name);
// }

// printText();
// alert(name);





// function printText(text = "true", text2, text3 = "Bye") {
//     alert(text);
//     alert(text2);
//     alert(text3);


// }
// name = "Timofey";
// printText(name, "hello");


// function calculateSquare(a, b) {
//     let s = a*b;
//     if (s > 10){
//         return s;
//     } else {
//         return;
//     }
// }

// let result;
// result = calculateSquare(3, 3);
// alert(result);

// let privod = "4wd";

// let car = {
//     year: 1999,
//     model: "sedan",
//     kpp: "automat",
    // "gaz diesel": false,
    // [privod]: "yes",
    // 4wd: false,
// };

// car.year = 2000;
// alert(car.year);
// alert(car);

// delete car.year;
// car.pricep = false;
// alert(car.pricep);
// alert(car.year);

// alert(car["gaz diesel"])
// delete car["gaz diesel"]

// alert(car[privod]);


// function makeCar(year, model, kpp) {
//     return {
//         year,
//         kpp: "mehanika",
//         model: model,
        
//     }
// }


// let car = makeCar(1999, "sedan", "automat");
// alert(car.kpp);

// alert("kpp" in car);

// if ("kpp" in car)

// for (let key in car) {
    // alert(key);
//     alert(car[key]);
// }

// let name = "Arseniy";
// let hisName = name;



// let car = {
//     year: 1999,
//     model: "sedan",
//     kpp: "automat",
// };

// let multivan = car;

// alert(car.year)
// multivan.year = 2000;
// alert(car.year)

// alert(car == multivan)

// let a = {};
// let b = {};
// alert(a == b);


// let multivan = {};

// for (let key in car) {
//     multivan[key] = car[key];
// }

// alert(car.year)
// multivan.year = 2000;
// alert(car.year)

// Object.assign(car, [multivan]);

// alert(car.year)
// multivan.year = 2000;
// alert(car.year)
// alert(multivan.year)


// let car = {
//     year: 1999,
//     model: "sedan",
//     kpp: "automat",
//     yelow: "WAIT",
//     green: function() {
//         alert("GAZ");
//     },
//     red() {
//         alert("STOP");
//     },
//     yelow1() {
//         alert(this.yelow);
//     }
// };

// function Car(year) {
    // this = {};

    // this.year = year;
    // this.model = "sedan";

    // return this;
// }

// let porche = new Car(1900);
// alert(porche.year);


// function driver() {
//     alert("Anatoliy");
// };

// car.driver = driver;

// car.drive = function() {
//     alert("Anatoliy");
// };

// car.yelow1();

// let arr = new Array();
let arr = ["porche", "BMW", "TOYOTA"];


// alert(arr[1]);
// arr[1] = "AUDI";
// alert(arr[1]);

alert(arr.length);

alert(arr);

