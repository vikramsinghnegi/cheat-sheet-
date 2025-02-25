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
🔥 **Aur bhi mast aur tricky JavaScript interview questions!** 🚀😆  

---

## **3️⃣1️⃣ Best Logical & Bitwise Questions**
```js
console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
console.log(~5);
console.log(~-1);
```
---
```js
console.log(2 << 3);
console.log(16 >> 2);
console.log(-16 >>> 2);
console.log(5 & 2);
console.log(5 | 2);
console.log(5 ^ 2);
```
---
```js
console.log(true && "Hello");
console.log(false && "Hello");
console.log(true || "World");
console.log(false || "World");
console.log(0 || 1);
console.log(1 || 2);
console.log(0 && 1);
console.log(1 && 2);
```

---

## **3️⃣2️⃣ Type Coercion & Weird Conversions**
```js
console.log("5" - 2);
console.log("5" + 2);
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

## **3️⃣3️⃣ Tricky Function & Hoisting Questions**
```js
function test() {
  console.log(a);
  var a = 5;
}
test();
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
```js
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "John";
  let age = 25;
}
sayHi();
```
---
```js
if (true) {
  let a = 5;
}
console.log(a);
```

---

## **3️⃣4️⃣ Event Loop & Promise vs SetTimeout**
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

## **3️⃣5️⃣ `this` Keyword in Different Contexts**
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

## **3️⃣6️⃣ Closures & Lexical Scope**
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

## **3️⃣7️⃣ Arrays & Objects**
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

## **3️⃣8️⃣ Prototype & Inheritance**
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

## **3️⃣9️⃣ Destructuring & Spread Operator**
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

## **4️⃣0️⃣ Promises & Async/Await**
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
Samajh gaya! 🔥 Ab koi repeat nahi hoga! 🚀  
Ye naye tricky **JavaScript questions** hain jo pehle nahi diye:

---

## **4️⃣1️⃣ Scope & Hoisting**
```js
console.log(x);
let x = 5;
```
---
```js
console.log(y);
var y = 10;
```
---
```js
function test() {
  if (true) {
    let a = 5;
  }
  console.log(a);
}
test();
```
---
```js
function test() {
  if (true) {
    var b = 10;
  }
  console.log(b);
}
test();
```

---

## **4️⃣2️⃣ Logical Operators & Short-circuiting**
```js
console.log(0 || 1 && 2);
console.log(1 && 0 || 3);
console.log(null ?? "default");
console.log(undefined ?? "fallback");
```
---
```js
console.log(0 ?? false);
console.log(0 || false);
console.log(null && true);
console.log(1 && "Hello");
```
---
```js
console.log("" || []);
console.log("" && []);
console.log([] || {});
console.log([] && {});
```

---

## **4️⃣3️⃣ Event Loop & Microtasks**
```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```
---
```js
setTimeout(() => console.log("A"), 0);
Promise.resolve().then(() => console.log("B"));
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

## **4️⃣4️⃣ Object Property Order & Deletion**
```js
const obj = { b: 2, a: 1, c: 3 };
console.log(Object.keys(obj));
```
---
```js
const obj = { x: 10 };
delete obj.x;
console.log(obj);
```
---
```js
const arr = [1, 2, 3];
delete arr[1];
console.log(arr.length);
console.log(arr);
```

---

## **4️⃣5️⃣ Arrays & Unexpected Behaviors**
```js
const arr = [1, 2, 3];
arr[10] = 50;
console.log(arr.length);
console.log(arr);
```
---
```js
console.log([1, 2, 3] + [4, 5, 6]);
```
---
```js
console.log([1, 2, 3].toString());
console.log(["Hello", "World"].toString());
console.log([null, undefined].toString());
```

---

## **4️⃣6️⃣ Prototypes & `this` Binding**
```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log("Hi, " + this.name);
};
const person1 = new Person("John");
person1.sayHi();
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
const obj = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  },
};
obj.greet();
```

---

## **4️⃣7️⃣ Async/Await & Error Handling**
```js
async function test() {
  throw new Error("Something went wrong");
}
test().catch(console.log);
```
---
```js
async function foo() {
  return "Hello";
}
console.log(foo());
```
---
```js
async function foo() {
  console.log("Start");
  const res = await new Promise((resolve) => setTimeout(() => resolve("Done!"), 1000));
  console.log(res);
}
foo();
console.log("End");
```

---

## **4️⃣8️⃣ Object Spread & Destructuring**
```js
const obj = { a: 1, b: 2 };
const newObj = { ...obj, b: 3, c: 4 };
console.log(newObj);
```
---
```js
const obj = { x: 1, y: 2 };
const { x, y, z = 3 } = obj;
console.log(x, y, z);
```
---
```js
const arr = [1, 2, 3];
const [first, second, ...rest] = arr;
console.log(rest);
```

---

## **4️⃣9️⃣ Set & Map Quirks**
```js
const set = new Set([1, 1, 2, 2, 3, 3]);
console.log(set.size);
```
---
```js
const map = new Map();
map.set("1", "one");
map.set(1, "ONE");
console.log(map.size);
console.log(map.get("1"));
console.log(map.get(1));
```
---
```js
const obj = {};
console.log(obj["__proto__"]);
console.log(obj.hasOwnProperty("__proto__"));
```

---

## **5️⃣0️⃣ DOM & Events**
```js
document.body.addEventListener("click", () => console.log("Body Clicked!"));
document.body.click();
```
---
```js
console.log(document.getElementById("nonexistent"));
```
---
```js
const div = document.createElement("div");
div.innerHTML = "<p>Hello</p>";
console.log(div.children.length);
```

---
🔥 **Aur naye tricky JavaScript questions aa rahe hain!** No repeat, sirf naye! 🚀  

---

## **5️⃣1️⃣ Function Execution & Closures**  
```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn();
fn();
fn();
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
```js
const add = (x) => (y) => x + y;
console.log(add(2)(3));
```

---

## **5️⃣2️⃣ Implicit & Explicit `this`**  
```js
const obj = {
  name: "Alice",
  sayHi() {
    console.log(this.name);
  },
};
setTimeout(obj.sayHi, 1000);
```
---
```js
const person = {
  name: "Bob",
  greet: function () {
    console.log(this.name);
  },
};
const greetFn = person.greet;
greetFn();
```
---
```js
const user = {
  name: "Charlie",
  arrowGreet: () => console.log(this.name),
  normalGreet: function () {
    console.log(this.name);
  },
};
user.arrowGreet();
user.normalGreet();
```

---

## **5️⃣3️⃣ Tricky Type Coercion**  
```js
console.log([] == ![]);
console.log([] == 0);
console.log([] == "");
```
---
```js
console.log(null == undefined);
console.log(null === undefined);
console.log(false == "0");
console.log(false === "0");
```
---
```js
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * "2");
console.log("5" / "2");
```

---

## **5️⃣4️⃣ Promise & Async/Await Trickery**  
```js
const p1 = new Promise((resolve) => setTimeout(() => resolve("A"), 2000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("B"), 1000));
Promise.race([p1, p2]).then(console.log);
```
---
```js
async function test() {
  return 42;
}
console.log(test());
```
---
```js
async function example() {
  console.log("Start");
  await Promise.resolve(console.log("Middle"));
  console.log("End");
}
example();
```

---

## **5️⃣5️⃣ Destructuring & Rest/Spread**  
```js
const obj = { a: 10, b: 20 };
const { a, b, c = 30 } = obj;
console.log(a, b, c);
```
---
```js
const numbers = [1, 2, 3, 4, 5];
const [first, , third, ...rest] = numbers;
console.log(rest);
```
---
```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
console.log([...arr1, ...arr2]);
```

---

## **5️⃣6️⃣ Event Loop & Execution Order**  
```js
console.log("Start");
setTimeout(() => console.log("Timeout 1"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
console.log("End");
```
---
```js
console.log("A");
setTimeout(() => console.log("B"), 1000);
setTimeout(() => console.log("C"), 0);
console.log("D");
```

---

## **5️⃣7️⃣ `new` Keyword & Prototypes**  
```js
function Person(name) {
  this.name = name;
}
const p = new Person("John");
console.log(p.__proto__ === Person.prototype);
```
---
```js
function Test() {}
Test.prototype.sayHi = function () {
  console.log("Hi");
};
const t = new Test();
console.log(t.sayHi === Test.prototype.sayHi);
```
---
```js
function A() {}
function B() {}
A.prototype = new B();
const a = new A();
console.log(a instanceof B);
```

---

## **5️⃣8️⃣ Weird Arrays & Objects**  
```js
console.log(typeof []);
console.log(Array.isArray([]));
console.log([] instanceof Array);
```
---
```js
console.log({} + []);
console.log([] + {});
console.log([, , ,].length);
```
---
```js
const arr = [1, 2, 3];
arr[100] = 50;
console.log(arr.length);
console.log(arr);
```

---

## **5️⃣9️⃣ Set & Map Advanced Cases**  
```js
const set = new Set([1, "1", true]);
console.log(set.size);
```
---
```js
const map = new Map();
map.set({}, "A");
map.set({}, "B");
console.log(map.size);
```
---
```js
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "value");
console.log(weakMap.has(obj));
```

---

## **6️⃣0️⃣ Symbols & `Object.assign`**  
```js
const sym = Symbol("id");
const obj = { [sym]: 123 };
console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));
```
---
```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);
```
---
```js
const obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 10;
console.log(obj);
```


Aur chahiye toh **topic batao**, uss pe naye tricky questions bana dunga! 😃
