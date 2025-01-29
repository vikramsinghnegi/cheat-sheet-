
26

8
Javascript console Methods: A Cheat Sheet for Developers
#
javascript
#
typescript
#
webdev
#
console
Javascript Cheat Sheet (4 Part Series)
1
28 Javascript Array Methods: A Cheat Sheet for Developer
2
13 Typescript Utility: A Cheat Sheet for Developer
3
Javascript console Methods: A Cheat Sheet for Developers
4
Javascript String Methods: A Cheat Sheet for Developer
A Javascript console object is a global object that provides access to the browser's debugging console.

Most of us have used console.log() to print messages to the console. but there are many other methods that we can use to debug code easily.

Without wasting time, Let's learn about the console methods.

info()
It's similar to log() but used to print info messages.

console.info("Hello World");
warn()
It's used to print warning messages. It'll print a colored(yellow) warning message, commonly used to indicate that something is not quite right.

console.warn("Hello World");
error()
It's used to print error messages. It'll print a colored(red) error message, commonly used to indicate that something has gone wrong.

console.error("Something went wrong");
table()
It's used to print tabular data. It'll help to visualize the data in a table format.

const user = {
  name: "John",
  age: 30,
};

console.table(user);
time()
It's used to print the time elapsed since the time() method was called. It's useful to see how long some operation takes.

console.time("TIME");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("TIME"); // TIME: 2.655029296875ms
clear()
It's used to clear the console. It's useful when you want to clear the console before printing new messages.

console.log("Old Message");
console.clear();
console.log("New Message"); // New Message
dir()
It's used to print the properties of an object. It's useful to see the properties of an object.

console.log(document.body); // <html>....</html>

console.dir(document.body); // body{...}
assert()
It's used to print an error message if the assertion fails. It's useful to check if some condition is true or not.

console.assert(1 === 2, "1 is not equal to 2"); // Assertion failed: 1 is not equal to 2

console.assert(1 !== 2, "1 is not equal to 2"); // nothing
count()
It's used to print the number of times it's called. It's useful to see how many times a function is called.

const exec = (label) => console.count(label);

exec(); // default: 1
exec(); // default: 2
group()
It's used to print a group of messages. It's useful to group messages together.

console.group("USER API");
console.log("Name: John");
console.log("Age: 20");
console.groupEnd();
console.group("PRODUCT API");
console.log("Name: Laptop");
console.log("Price: 20");
console.groupEnd();
profile()
It's used to print the time elapsed since the profile() method was called. It's useful to see how long some operation takes.

console.profile("PROFILE");
for (let i = 0; i < 1000000; i++) {}
console.profileEnd("PROFILE");
Note: To see the profile results, you need to go to the browser's profiler.
trace()
It's used to print the call stack. It's useful to see the call stack.

function foo() {
  console.trace("TRACE");
}
foo();
log()
Logs a message to the console.

const greet = "Hello";
console.log("Hello World"); // Hello World
console.log("%s World", greet); // Hello World
console.log("%cHello %cWorld", "color: red", "color: green"); // Hello(red) Wor
