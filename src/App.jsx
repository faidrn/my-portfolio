import { useState } from 'react'
import { Header } from './components/layout/Header.jsx';
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-white'>
        <Header />
      </div>
      
    </>
  )
}

export default App
