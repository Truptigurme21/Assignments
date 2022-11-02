// Create a counter component with two buttons and one label. One button will increment while
// another button will decrement the counter. The label should show the current value of counter.

import React ,{useState} from 'react'

const Counter = () => {

    const [counter,updateCounter] = useState(0)

    const incrementCounter = ()=>{
        updateCounter(counter + 1)
        console.log(`incrementing the counter`)
    }

    const decrementCounter = () => {
        updateCounter(counter - 1)
        console.log(`decrementing counter`)
    }

  return (
    <div className="mt-5 mb-3">
        <button type="button" class="btn btn-info" onClick={incrementCounter}>+</button> &nbsp;
        
        <span >{counter}</span> &nbsp;
        <button type="button" class="btn btn-info" onClick={decrementCounter}>-</button>
        
    </div>
    
  )
}

export default Counter