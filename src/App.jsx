// CSS IMPORT
import './App.css'

// IMPORTING HOOK
import { useState } from "react"


export default function App() {

  // useState HOOK
  const [count, setCount] = useState(0)

  return (
    <div>

      <button onClick={() => {
        // Button increments value by 1
        setCount(count + 1)
        console.log(count)
        }}> +1 </button>

      <button onClick={() => {
        setCount(count - 1)
        // Button decrements value by 1
        console.log(count)
        }}> -1 </button>

      <p onClick={() => {
        // Reset to 0 on click
        setCount(0)
        console.log(count)
        }}>Current count: {count}</p>

    </div>
  )
}