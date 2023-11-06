import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <form action="/login">
      <label htmlFor="username">Username </label>
      <input type="text" id='username'/><br />
      <label htmlFor="password">Password</label>
      <input type="password" id='password'/><br />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
    </>
  )
}

export default App
