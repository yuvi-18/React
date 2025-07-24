# install

can use vite for initializing a react app 

```
npm create vite@latest
```

for vite use the extention of jsx instead of js (it would still work but vite reccomends using jsx).


We don't need to manually initialize an npm project (npm init) when using Create React App.
```
npx create-react-app my-app
```

However, if we're setting up a React app without Create React App (like using Webpack manually), then you would need to initialize npm first with npm init.

then change the cd

```
cd my-app
```

then host the server 

```
npm start
```

This will launch our React app in a browser at http://localhost:3000.

then we can modify the app.js from the src folder to use the app

# import

import from "react"
This imports the core React library, which is used to build components and define UI logic.

import from "react-dom/client"
This is part of the React DOM renderer, responsible for rendering React elements into the actual DOM (i.e., into HTML on the page).

# class

```js
className; // use className instead of class to use class in JSX(react).
```

# render 
## One liners

here are some different ways to render a single line componenet in react.

```jsx

// First Method
const MainContent = <h1>React is great!</h1>;

root.render(
        MainContent
);


// Second Method
function MainContent(){ // name these functions in first letter capital (PascalCase) so that it is viewed as a componenet. 
//(React treats anything starting with a lowercase letter as a native HTML tag.)

     return (
        <h1>React is great!</h1>;
        )  // if you are writting simple code you can skip the return parenthesis ex:- return <h1>React is great!</h1>
}

root.render(
       <MainComponent/>
);
```

```jsx
const MainContent = <h1>React is great!</h1>;

root.render(MainContent);
```

MainContent is already a React element — a JSX expression like <h1>...</h1> returns a React element.


```jsx
function Logo() {
  return <img src="react-logo.png" />;
}
```
Logo is a function, not a React element.

To get the React element it returns, you have to call it in JSX as 
```js
<Logo />
```


## Multiple Elements 
For multiple elements the children elements must be covered in a single parent element;

```jsx
root.render(
    <div>
       <h1>I am child</h1>
       <h2>same</h2>
       {MainContent} 
    </div>
    // main content in braces so that it does not get treated as plain text in multi liners;
    // can use div, article, main or any other tag;
);


// using fragments, to ignore the creation of unneccesary another parent into the pre existing root tag into the html, 
// we can use the fragment tag provide by the react library that, simply just appends the children element into the code rather than creating unneccesary parent tag.
// In React, Fragments let you group multiple elements without adding extra nodes to the DOM.


//You cannot use <Fragment></Fragment> directly unless you explicitly import Fragment from React. 
// eg:-

import { Fragment } from "react";

function Example() {
  return (
    <Fragment>
      <h1>React is awesome!</h1>
      <h2>Fragments make JSX cleaner.</h2>
    </Fragment>
  );
}


// if not importing use :-
function Example() {
  return (
    <React.Fragment>
      <h1>React is awesome!</h1>
      <h2>Fragments keep the DOM clean.</h2>
    </React.Fragment>
  );
}

// easier and faster way to do this is using empty brackets which will act like fragments
function Example() {
  return (
    <>
      <h1>React is amazing!</h1>
      <h2>Fragments help keep the DOM clean.</h2>
    </>
  );
}
```

# declarative vs imperative

```jsx
// declarative (what to do, and computer does it);
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"));
const rootElement = <h1 className="header" >Hello yaar</h1>;
root.render(
    rootElement
);


// imperative (how to do something);
const div = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerText = "Hello! react";
h1.className = "header"; 
div.appendChild(h1);
```

# useState
Importing React and useState:

The useState hook is imported from React. This allows the component to have state management.
In React (and other frameworks), state management is the process of handling and updating the "state" of an application—essentially, the dynamic data or properties that influence what gets displayed on the user interface. The state represents the "live" aspects of your app, meaning it can change based on user interaction or other events, and state management ensures these changes are handled properly.

A state variable count and its updater function setCount are initialized with useState(0). This means the counter starts at 0.

```js
import React, { useState } from 'react';


// const [state, setState] = useState(initialValue);
const [count, setCount] = useState(0);
setCount(count + 1); // Increments count by 1.
```

state: The current value of the state.

setState: A function used to update the state.

initialValue: The initial/default value of the state.


The setCount function is called directly with the new value that you want the state to have. For example:

```js
setCount(count + 1);
// not like the typical function syntax
```

## Calling a function
In JSX (React):
React allows calling functions inline directly within the markup using curly braces {}. For example:

```jsx
<button onClick={() => myFunction('Hello!')}>Click me</button>
```

## Passing the Function Reference
If the function doesn’t require arguments, you can simply pass its reference (not call it directly with parentheses). For example:

```jsx
<button onClick={myFunction}>Click me</button>
```


An example counter app:- 

counter.js:-

```js
import React, { useState } from 'react'

const Counter1 = ()=>{

    const [count, setCount] = useState(0);
    const increment = () => { setCount(count + 1)};
    const decrement = () => { if(count> 0) {
    setCount(count - 1)
}};

const reset = () => { setCount(0) };

return (
    <div>
    <h1>Counter</h1>
    <p>Count: {count}</p>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    </div>
    );
}
 export default Counter1;

// React components should begin with an uppercase letter to adhere to conventions and avoid potential issues. Update counter1 to Counter1. This is not a technical error in itself but is good practice.
```

Now simply import the Counter1.js in app.js and call the Counter1 for the output.