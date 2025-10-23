import React,{ useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import Header from './components/layout/Header';
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LanguageProvider>
        <div className='min-h-screen bg-white'>
          <Header />
        </div>
      </LanguageProvider> 
      
    </>
  )
}

export default App
