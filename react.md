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

# Basic

## import

import from "react"
This imports the core React library, which is used to build components and define UI logic.

import from "react-dom/client"
This is part of the React DOM renderer, responsible for rendering React elements into the actual DOM (i.e., into HTML on the page).

## class

```js
className; // use className instead of class to use class in JSX(react).
```

## React Element
A React Element is a plain JavaScript object that describes what you want to see on the screen.

```js
const element = <h1>Hello world</h1>;
```

## React Component

A React Component is a function or class that returns React elements. It's how you build reusable UI pieces.
```js
function Greeting() {
  return <h1>Hello from component!</h1>;
}
```

## render 

displaying to the user


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

## declarative vs imperative

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

## Export

to export a component we can do simply like this 

```jsx
export default function Header() {
    return (
        <header className="header">
            <img src="react-logo.png" className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
```

## Import 

when importing if it's a default export we don't need to use {}, also in default exports we can use any name
for the component.

```jsx
import Header (any name) from "./Header.jsx"
```

## props 

objects
a data driven way to make the code writing proccess tidier and efficient 

### string props
use ""

```jsx

import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App

// Contact.jsx

export default function Contact(props) {
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}
```

### non string props
use {}

```jsx
<Joke
punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
upvotes={10} // number
isPun={true} // boolean 
comments={[]} // not a object its an array
comments={[ {author: "", text: "", title: ""},
            {author: "", text: "", title: ""} ]} // an array of objects
/>
```

## key

it is reccommended to not use index as an unique identifier for your elemnts in the map fucntion but use id instead (ex form api).

## return 

implicit rturn with ()

```jsx

// implicit return syntax use parenthesis instead of curly braces
jokes.map((joke, index) => (
    <Jokes key={index} setup={joke.setup} punchline={joke.punchline} />
))

// classic function syntax 
jokes.map(()=>{})

```

You’re using () instead of {} after the arrow =>.

That tells React to implicitly return whatever is inside the parentheses — in this case, the <Jokes /> component.

No need for a return keyword or block statement, making the code tidier.

 
## conditional rendering
if i wnat to include something like a setup for the joke i would use conditional rendering to render the setup
part of that joke only if there's a setup part, else don't show the styling or the text or anything of the setup, so few ways to accomplish that directly in the dom could be:-


```jsx

// first way this will check if the setup prop exit then it will render it.
  {props.setup && <p className="setup">Setup: {props.setup}</p>}
  <p className="punchline">Punchline: {props.punchline}</p>

// using ternary operators
 <p style={{display: props.setup ? "block" : "none"}} className="setup">Setup: {props.setup}</p>

// or using some if else, swtich case etc.
```

## import satatic images by variable name
can use variable names instead of images direct links in vite.
it helps if you compress the code, it will help vite when it compresses files.

```jsx
import mrWhiskerson from "./images/mr-whiskerson.png"
import fluffykins from "./images/fluffykins.png"
import felix from "./images/felix.png"
import pumpkin from "./images/pumpkin.png"


function App() {
    return (
        <div className="contacts">
            <Contact
                img={mrWhiskerson}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
    )
```

## render array

react can render array but as plain text on the screen

```jsx
const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
    return (
        <main>
            {ninjaTurtles}
        </main>
    )
}
```

but can't render an object, you'll get an error, but it can render an jsx elemnet as an object,for ex:-

```jsx
export default function App() {
    const jsx = <h1>Donatello</h1>
    conso
    return ()
}

// {type: 'h1', key: null, props: {children: 'Donatello'}, _owner: FiberNode, _store: {}}
```

but it can render an array of jsx on the page for ex:-

```jsx
export default function App() {
    const ninjaTurtles = [
        <h2>Donatello</h2>, 
        <h2>Michaelangelo</h2>,
        <h2>Rafael</h2>,
        <h2>Leonardo</h2>
    ]
    return (
        <main>
            {ninjaTurtles}
        </main>
    )
}
```

## obj prop

so when we have many prop for a single react elment, it becomes lengthy, to fix that we can just simply access all the props that we are getting (ex:- form api),

```jsx
export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
            />
        )
    })
```

but we have to match the recieving end of the code, and also match the names in the api ex:-

```jsx
<img 
    src={props.entry.img.src} // instead if props.img.src
    alt={props.entry.img.alt}
/>

img: { // it con't be image or some other name, all should match.
        src: "https://scrimba.com/links/travel-journal-japan-image-url",
        alt: "Mount Fuji"
    }


// an alternative can be using spread operator, then we don't have to make any changes, it will match all the properties like they are, ex:-

img:{props.img.src}


const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry} // same as .id,.img etc, with same name as the data (api).
            />
        )
    })
```


## Props

Props refers to the properties being passed into a component in order for it to work correctly, similar to how a function receives parameters: "from above." A component receiving props is not allowed to modify those props. (I.e. they are "immutable.")

## State

State refers to values that are managed by the component, similar to variables declared inside a function. Any time you have changing values that should be saved/displayed, you'll likely be using state.

# useState
Importing React and useState:

The useState hook is imported from React. This allows the component to have state management.
In React (and other frameworks), state management is the process of handling and updating the "state" of an application—essentially, the dynamic data or properties that influence what gets displayed on the user interface. The state represents the "live" aspects of your app, meaning it can change based on user interaction or other events, and state management ensures these changes are handled properly.

A state variable count and its updater function setCount are initialized with useState(0). This means the counter starts at 0.

```jsx
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


```jsx
    function add() {
        setCount(prevCount=> prevCount + 1) // callback function, this works keeping the old value of state in mind
        setCount(prevCount=> prevCount + 1)
        setCount(prevCount=> prevCount + 1)
    } // increments by 3

    // helpfull when we want state to rely on prev value of state

    function subtract() {
        setCount(count - 1)
        setCount(count - 1)
        setCount(count - 1)
    } // decrements by 1
```

Note! In state, never modify the state directly, not efficient not reccommended ex:-
count = count + 1.


```jsx
// state by array

setIngredients(prevIngredients => [...prevIngredients, newIngredient])

// state by object

let starIcon = contact.isFavorite ? starFilled : starEmpty

function toggleFavorite() {
    setContact(prevContact => {
        return {
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }
    })
}


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

```jsx
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

# Forms

A basic jsx form with important attributes:-
```jsx
function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form method="POST">
        <label htmlFor="email">Email:</label> {/* jsx don't have simple for so we use htmlFor, it should we associated with id of the input */}
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
      </form>

      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" />
      <br />
        
      <input type="submit" value="Click" /> 
      <button></button> {/*button when inside a form acts like a submit button, it's same as input type submit can give type="submit" for more stability across all browsers*/}

    </section>
  )
}
```

## Form Submission

Sensitive info in POST req for form 

```jsx
<form method="POST"> 
```

onsubmit handler on the form element for best practise 

```jsx
<form onSubmit={handleSubmit} method="post">
```

```jsx
 function handleSubmit(event) {
    event.preventDefault() {/*prevent refresh*/}
    const formEl = event.currentTarget // get access to the dom node, currentTarget usage is safer
    const formData = new FormData(formEl) // formData object will give us access to all the data of the form
    const email = formData.get("email") // it'll give us the form email, input name should be equal to the thing we are fatching for, in here < input name="email" />
    formEl.reset() // to reset or clear the fields of the form
  }