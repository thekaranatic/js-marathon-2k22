# Assignment - Day 1  

## Uses of JavaScript 
JS can be used to develop:  
1. Backend
2. Browser - Design & develop dynamic websites as well as web applications, PWA
3. Mobile Development, Desktop  
4. APIs and Cloud (they are cool) &  
5. Also Machine Learning, DSA and Blockchain  

## Difference between client-side and server-side  
If we imagine any application as a block, it has its front-end and back-end. Front-end is referred to as client-side and the back-end as the server-side.  
**Client-side** involves the visual interface an user will interact with (the visual elements). The client-side code is ofcourse executed on client's environment.  
**Server-side** involves dynamic code that makes up the interface and the values displayed on the screen. The code written here computes the data according to the functionality as specified.  

## What is Node.js
Nodejs is a runtime environment for JavaScript. Nodejs helps us to not always rely on the Developer Tools on the browser but run JS on terminals.  

## Scope in JS  
> Scope is a state which manages the accessibility of a variable  

For example (example inspiration: [Dmitri Pavlutin](https://dmitripavlutin.com)),

Here is a variable which stores string "Hi". If we try to print it, it does print.
```
let greet = "Hi";
console.log(greet);
```  

It did because we are logging this variable right after the declaration.  
But this is not the case when the declaration is put in an `if` block:
```
if(true){
  let greet = "Hi";
}
console.log(greet);
```  
We are introduced with an error *ReferenceError: greet is not defined*.This error is caused due to restriction in accessibility of the variable. The accessibility of the variable `greet` lies only under that `if` block but not outside of it.  

## Is JS Synchronous or Asynchronous  
As [Simran Bhalode](https://medium.com/@SimranBhalode/is-javascript-synchronous-or-asynchronous-8b04738c55f5) writes on Medium: ** JS is synchronous in behaviour** although, its features, ways of dealing with previous issues using callbacks, promises, async/await allows us implement asynchronous (behavior) event handling in our projects.  

## Is JS single-threaded or multithreaded
As JS is synchronous in nature, it is single-threaded. As I have read, JS doesn't run concurrently in browsers.  

## Explain DOM in your own words
When a static HTML web page is created, the browser creates a structure of that page. The structure is called DOM - Document Object Model. To make the webpage dynamic or basically access the elements in the webpage, the DOM API is used by JS.
