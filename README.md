# **1️⃣ Type Conversion & Operators**
```js
console.log(+"10" + 5); 
console.log("10" + 5);
```
---
```js
console.log([] + []); 
console.log({} + []);
```
---
```js
console.log([] + {}); 
console.log({} + {});
```
---
```js
console.log(2 + "2" - 1);
console.log("2" + 2 - 1);
```
---
```js
console.log("5" - -"2");
console.log("5" + -"2");
```
---
```js
console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2);
```

---

### **2️⃣ Truthy & Falsy Values**
```js
console.log(!!"false");
console.log(!!undefined);
```
---
```js
console.log([] == false);
console.log([] === false);
```
---
```js
console.log({} == false);
console.log({} === false);
```
---
```js
console.log(!!null);
console.log(!!NaN);
```
---
```js
console.log(null == undefined);
console.log(null === undefined);
```
---
```js
console.log([] == ![]);
console.log([] === ![]);
```

---

### **3️⃣ Objects & Arrays Comparison**
```js
console.log({} == {});
console.log([] == []);
```
---
```js
let a = [];
let b = a;
console.log(a == b);
console.log(a === b);
```
---
```js
let x = [1, 2, 3];
let y = x;
y.push(4);
console.log(x);
```
---
```js
let obj = { a: 1, b: 2 };
console.log(obj["a"]);
console.log(obj.a);
console.log(obj[a]);
```

---

### **4️⃣ Functions & Scope**
```js
var x = 10;
function test() {
  console.log(x);
  var x = 20;
}
test();
```
---
```js
function foo() {
  console.log(this);
}
foo();
```
---
```js
let obj = {
  foo: function () {
    console.log(this);
  }
};
obj.foo();
```
---
```js
console.log(typeof NaN);
console.log(typeof null);
```
---
```js
console.log(!!function () {});
console.log(!!{});
```

---

### **5️⃣ setTimeout & Asynchronous JavaScript**
```js
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
```
---
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```
---
```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

---
🔥 **Aur bhi zabardast tricky JavaScript questions!** 😆🚀  

---

## **6️⃣ Hoisting & Scope**
```js
console.log(a);
var a = 10;
console.log(a);
```
---
```js
console.log(a);
let a = 10;
console.log(a);
```
---
```js
function test() {
  console.log(a);
  var a = 5;
}
test();
```
---
```js
if (true) {
  let a = 5;
}
console.log(a);
```
---
```js
var x = 1;
function foo() {
  console.log(x);
  var x = 2;
}
foo();
```

---

## **7️⃣ Functions & `this` Keyword**
```js
function sayHello() {
  console.log(this);
}
sayHello();
```
---
```js
const obj = {
  name: "John",
  greet: function () {
    console.log(this.name);
  },
};
setTimeout(obj.greet, 1000);
```
---
```js
let obj = {
  x: 10,
  print: function () {
    setTimeout(function () {
      console.log(this.x);
    }, 1000);
  },
};
obj.print();
```
---
```js
let obj = {
  x: 10,
  print: function () {
    setTimeout(() => {
      console.log(this.x);
    }, 1000);
  },
};
obj.print();
```

---

## **8️⃣ Closures & Lexical Scope**
```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();
counter();
```
---
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```
---
```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

---

## **9️⃣ Arrays & Objects Tricks**
```js
console.log(typeof []);
console.log(typeof {});
console.log(typeof null);
console.log(Array.isArray([]));
```
---
```js
const arr = [1, 2, 3];
arr[10] = 50;
console.log(arr.length);
console.log(arr);
```
---
```js
const obj = { a: 1, b: 2, a: 3 };
console.log(obj);
```
---
```js
const obj = {};
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);
```

---

## **🔟 Prototype & Inheritance**
```js
function Person(name) {
  this.name = name;
}
const person1 = new Person("John");
console.log(person1.__proto__ === Person.prototype);
```
---
```js
const obj1 = { a: 1 };
const obj2 = Object.create(obj1);
console.log(obj2.a);
```
---
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
const dog = new Dog("Buddy");
console.log(dog.name);
```

---

## **1️⃣1️⃣ Destructuring & Spread Operator**
```js
const { a, b } = { a: 10, b: 20 };
console.log(a, b);
```
---
```js
const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;
console.log(rest);
```
---
```js
const obj = { x: 1, y: 2 };
const newObj = { ...obj, y: 5, z: 10 };
console.log(newObj);
```

---

## **1️⃣2️⃣ Promises & Async/Await**
```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```
---
```js
async function test() {
  return "Hello";
}
test().then(console.log);
```
---
```js
async function test() {
  return new Promise((resolve) => setTimeout(() => resolve("Done!"), 1000));
}
test().then(console.log);
```

---


🔥 **Aur bhi dhamakedar tricky JavaScript questions!** 🚀😆  

---

## **1️⃣3️⃣ Bitwise & Logical Operators**
```js
console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
```
---
```js
console.log(~5);
console.log(~-1);
```
---
```js
console.log(true && "Hello");
console.log(false && "Hello");
console.log(true || "World");
console.log(false || "World");
```
---
```js
console.log(0 || 1);
console.log(1 || 2);
console.log(0 && 1);
console.log(1 && 2);
```
---

## **1️⃣4️⃣ Weird JavaScript Conversions**
```js
console.log("5" - 2);
console.log("5" + 2);
console.log("5" * "2");
console.log("5" / "2");
console.log("5" - "2");
console.log("5" - {});
console.log("5" - []);
console.log("5" - null);
console.log("5" - undefined);
```
---
```js
console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});
```
---

## **1️⃣5️⃣ Undefined vs Null vs NaN**
```js
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);
```
---
```js
console.log(undefined == null);
console.log(undefined === null);
console.log(isNaN("Hello"));
console.log(isNaN(5));
console.log(isNaN(undefined));
```
---
```js
console.log(Number(undefined));
console.log(Number(null));
console.log(Number("Hello"));
console.log(Number(" 123 "));
console.log(Number(""));
```
---

## **1️⃣6️⃣ SetTimeout & Event Loop**
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```
---
```js
setTimeout(() => console.log("1"), 0);
Promise.resolve().then(() => console.log("2"));
console.log("3");
```
---
```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
```
---

## **1️⃣7️⃣ Array Methods & Manipulations**
```js
const arr = [1, 2, 3];
arr[5] = 10;
console.log(arr.length);
console.log(arr);
```
---
```js
console.log([1, 2, 3] + [4, 5, 6]);
console.log([1, 2, 3].toString());
```
---
```js
const arr = [1, 2, 3, 4];
console.log(arr.splice(1, 2));
console.log(arr);
```
---
```js
const arr = [1, 2, 3, 4];
console.log(arr.slice(1, 2));
console.log(arr);
```
---

## **1️⃣8️⃣ Object & Property Tricks**
```js
const obj = { a: 1, b: 2, a: 3 };
console.log(obj);
```
---
```js
const obj = {};
Object.defineProperty(obj, "x", { value: 10, enumerable: false });
console.log(Object.keys(obj));
console.log(obj.x);
```
---
```js
let obj = { a: 1, b: 2 };
console.log("a" in obj);
console.log("c" in obj);
```
---

## **1️⃣9️⃣ `this` & Arrow Functions**
```js
const obj = {
  name: "John",
  sayHello: function () {
    console.log(this.name);
  },
};
const greet = obj.sayHello;
greet();
```
---
```js
const obj = {
  name: "Alice",
  sayHello: () => {
    console.log(this.name);
  },
};
obj.sayHello();
```
---
```js
const obj = {
  name: "Bob",
  sayHello: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};
obj.sayHello();
```
---

## **2️⃣0️⃣ Promises & Async/Await Tricks**
```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```
---
```js
async function foo() {
  return "Hello";
}
foo().then(console.log);
```
---
```js
async function foo() {
  return new Promise((resolve) => setTimeout(() => resolve("Done!"), 1000));
}
foo().then(console.log);
```
---
```js
console.log("Start");
async function foo() {
  console.log("Inside async function");
  return "Done";
}
console.log("Before function call");
foo().then(console.log);
console.log("After function call");
```
---

🔥 **Aur bhi mast JavaScript tricky questions!** 🚀😆  

---

## **2️⃣1️⃣ Weird JavaScript Type Coercion**
```js
console.log("5" - "2");
console.log("5" + "2");
console.log("5" * "2");
console.log("5" / "2");
console.log("5" - []);
console.log("5" - {});
console.log("5" - null);
console.log("5" - undefined);
console.log("5" + {});
console.log({} + "5");
console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});
```

---

## **2️⃣2️⃣ Tricky Number Operations**
```js
console.log(0.1 + 0.2 === 0.3);
console.log(9999999999999999);
console.log(Math.max());
console.log(Math.min());
console.log(Math.max([]));
console.log(Math.min([]));
console.log(Math.max(null));
console.log(Math.min(null));
console.log(Math.max(undefined));
console.log(Math.min(undefined));
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.30000000000000004);
```

---

## **2️⃣3️⃣ Event Loop & Microtasks**
```js
console.log("Start");
setTimeout(() => console.log("Timeout 1"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timeout 2"), 0);
Promise.resolve().then(() => console.log("Promise 2"));
console.log("End");
```
---
```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```
---
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```
---
```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
```

---

## **2️⃣4️⃣ Function Execution & Hoisting**
```js
function foo() {
  console.log(a);
  var a = 10;
}
foo();
```
---
```js
function foo() {
  console.log(a);
}
let a = 10;
foo();
```
---
```js
function test() {
  console.log(a);
  var a = 5;
}
test();
```
---
```js
if (true) {
  let a = 5;
}
console.log(a);
```
---
```js
var x = 1;
function foo() {
  console.log(x);
  var x = 2;
}
foo();
```

---

## **2️⃣5️⃣ `this` Keyword in Different Contexts**
```js
function sayHello() {
  console.log(this);
}
sayHello();
```
---
```js
const obj = {
  name: "John",
  greet: function () {
    console.log(this.name);
  },
};
setTimeout(obj.greet, 1000);
```
---
```js
let obj = {
  x: 10,
  print: function () {
    setTimeout(function () {
      console.log(this.x);
    }, 1000);
  },
};
obj.print();
```
---
```js
let obj = {
  x: 10,
  print: function () {
    setTimeout(() => {
      console.log(this.x);
    }, 1000);
  },
};
obj.print();
```

---

## **2️⃣6️⃣ Closures & Lexical Scope**
```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();
counter();
```
---
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```
---
```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

---

## **2️⃣7️⃣ Arrays & Objects**
```js
console.log(typeof []);
console.log(typeof {});
console.log(typeof null);
console.log(Array.isArray([]));
```
---
```js
const arr = [1, 2, 3];
arr[10] = 50;
console.log(arr.length);
console.log(arr);
```
---
```js
const obj = { a: 1, b: 2, a: 3 };
console.log(obj);
```
---
```js
const obj = {};
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);
```

---

## **2️⃣8️⃣ Prototype & Inheritance**
```js
function Person(name) {
  this.name = name;
}
const person1 = new Person("John");
console.log(person1.__proto__ === Person.prototype);
```
---
```js
const obj1 = { a: 1 };
const obj2 = Object.create(obj1);
console.log(obj2.a);
```
---
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
const dog = new Dog("Buddy");
console.log(dog.name);
```

---

## **2️⃣9️⃣ Destructuring & Spread Operator**
```js
const { a, b } = { a: 10, b: 20 };
console.log(a, b);
```
---
```js
const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;
console.log(rest);
```
---
```js
const obj = { x: 1, y: 2 };
const newObj = { ...obj, y: 5, z: 10 };
console.log(newObj);
```

---

## **3️⃣0️⃣ Promises & Async/Await**
```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```
---
```js
async function test() {
  return "Hello";
}
test().then(console.log);
```
---
```js
async function test() {
  return new Promise((resolve) => setTimeout(() => resolve("Done!"), 1000));
}
test().then(console.log);
```
---
```js
console.log("Start");
async function foo() {
  console.log("Inside async function");
  return "Done";
}
console.log("Before function call");
foo().then(console.log);
console.log("After function call");
```
---

