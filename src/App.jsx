import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store, { decrement, increment, label } from './redux/store'

function App() {
  const [count, setCount] = useState(0)
  const value=useSelector((state)=>state)
  console.log(value);
  const dispatch=useDispatch()
  const handleBox=(e)=>{
console.log(e.target.checked);
dispatch(label(e.target.checked))
  }

  return (
<>
   
   <input checked={value.showlabel} type='checkbox' onClick={handleBox}></input>
   {value.showlabel? (<p>null</p>):(
  <>
   <button onClick={()=>dispatch(increment())}>increment</button>
   <p>{value.count}</p>
   <button onClick={()=>dispatch(decrement())}>decrement</button></>)}
   
 </>
       
  )
}

export default App
