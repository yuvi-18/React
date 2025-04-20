# install

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