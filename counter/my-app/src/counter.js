import React, {useState} from 'react';

const Counter1=()=>{

const [count, setCount]=useState(0);         
const Increment=()=>setCount(count+1);
const Decrement=()=>{
    if(count>0){
		setCount(count-1);
	}};
const Reset=()=>setCount(0);

return(
	<div>
	<h1>Counter</h1>
	<p>Count : {count}</p>
	<button onClick={Increment}>Increment</button>
	<button onClick={Decrement}>Decrement</button>
	<button onClick={Reset}>Reset to 0</button>
	</div>);

}
 export default Counter1;