import React,{ useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LanguageProvider>
        <div className='min-h-screen bg-white'>
          <Header />
          <main>
            <About />
            {/* Main content goes here */}
            <div className='container mx-auto px-4 py-8'>
              <h1 className='text-3xl font-bold mb-4'>Welcome to My Portfolio</h1>
              <p className='text-gray-700'>This is where the main content of the application will be displayed.</p>
            </div>
          </main>
          <Footer />
        </div>
      </LanguageProvider> 
      
    </>
  )
}

export default App
