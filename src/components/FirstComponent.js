import React from 'react'
import { increment, decrement } from "../CounterSlice";
import { useSelector, useDispatch } from 'react-redux'


const FirstComponent = () => {
 const dispatch = useDispatch()
 const count = useSelector((state)=>state.counter.count)
  return (
    <div>
        <p>Let's access the state of store here in coin in First Component</p>
        <button onClick={()=>{dispatch(increment)}}>COIN INC</button>
        <p>{count}</p>
        <button onClick={()=>{dispatch(decrement)}}>COIN DEC</button>
    </div>
  )
}

export default FirstComponent