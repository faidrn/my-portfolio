import React,{ useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import { Toaster } from 'sonner';
//import './App.css'

function App() {

  return (
    <>
      <LanguageProvider>
        <div className='min-h-screen bg-white'>
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Resume />
            <Portfolio />
            <Blog />
            <Contact />

             {/* Toaster para mostrar los mensajes */}
            <Toaster position="top-center" richColors closeButton />
          </main>
          <Footer />
        </div>
      </LanguageProvider> 
      
    </>
  )
}

export default App
