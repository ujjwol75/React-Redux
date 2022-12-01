import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../CounterSlice'

const SecondComponent = () => {

    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
  return (
    <div style={{marginTop:'20px'}}>
        <button style={{marginRight:'10px'}} onClick={()=>{dispatch(increment())}}>Increment</button>
        {count}
        <button style={{marginLeft:'10px'}} onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
  )
}

export default SecondComponent