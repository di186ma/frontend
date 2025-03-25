'use strict';

// class MyClass {
//     setting = "mySetting";

//     constructor(name) {
//         this.name = name;
//     }
    
//     printMessage(){
//         alert(this.name);
//     }
    
//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value.length > 5) {
//             this._name = value
//         } else {
//             alert("Не подходит");
//             return;
//         }
//     }
// }

// let object = new MyClass("message");
// object.printMessage();
// object = new MyClass("3dfdfd");
// alert(object.name)

// let User = class users {
//     sayHi() {
//         alert("Hello");
//     }
// }

// new User().sayHi();

// alert(User);

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(this.name);
//     }
// }

// class Dog extends Animal {
//     constructor(name, golos) {
//         super(name);
//         this.golos = golos;
//     }

//     outputFunc() {
//         console.log(this.golos);
//     }

//     #sername = "neznaikin";

//     getSername() {
//         return this.#sername;
//     }
// }

// class Duck extends Animal {
//     constructor(name, golos) {
//         super(name);
//         this.golos = golos;
//     }

//     outputFunc() {
//         console.log(this.golos);
//     }

//     #sername = "neznaikin";

//     getSername() {
//         return this.#sername;
//     }
// }

// let dog = new Dog("Pushistik", "gav");
// let duck = new Duck("Ducky Duck", "krya");
// dog.speak();
// dog.outputFunc();
// console.log(dog.getSername());
// duck.speak();
// duck.outputFunc();
// console.log(duck.getSername());


// document.body.style.background = "red";

// let items = document.getElementsByClassName("text");
// console.log(items);

// let itemsTag = document.getElementsByTagName("p");
// console.log(itemsTag)

// let buttons = document.querySelectorAll(".text");
// console.log(buttons);

// let button = document.querySelector(".text");
// console.log(button);

let welcomeText = document.querySelector(".text");
console.log(welcomeText);
if (welcomeText) {
    welcomeText.textContent = "Hello, Im Victor";
    console.log(welcomeText);
} else {
    console.log("Элемент не найден!");
}


let elem = document.getElementById('hello');
elem.hidden = false;
// elem.onclick = function() {
//     alert('Клик1');
// }
// elem.onclick = function() {
//     alert('Клик2');
// }

elem.addEventListener("click", () => alert('Клик1'))
elem.addEventListener("click", () => alert('Клик2'))

document.addEventListener("DOMContentLoaded", function() {
    alert("HTML is ready")
})

// elem.textContent = "Приветствие";

let nav = document.querySelectorAll('nav');
for (let navElem of nav) {
    console.log(navElem);
    // navElem.style.color = 'red'
}


// alert(document.body);
// alert(document.body.constructor.name);

// alert(document.body instanceof HTMLBodyElement);
// alert(document.body instanceof NodeList);
// alert(document.body instanceof Node);

// alert(document.body.innerHTML)
// document.body.innerHTML += "<h1>Hello"
// alert(document.body.innerHTML)

// console.log(document.body.innerHTML)
// console.log(document.body.outerHTML)

let btn_form = document.getElementById('btn_form')
btn_form.type = "input";

let p_primary = document.getElementById('p_primary');
p_primary.addEventListener("click", function(event) {
    alert(event.target)
    event.stopPropagation();
})
// alert(p_primary.target)




// рассказать про погружение