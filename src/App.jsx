import React,{ useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';
import BlogList from './components/sections/Blog/BlogList';
import Contact from './components/sections/Contact';
import { Toaster } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './components/sections/Blog/BlogPost';


function App() {

  return (
    
      <LanguageProvider>
        <Router>
          <div className='min-h-screen bg-white'>
            <Header />
            <main>
              <Routes>
                {/* Landing Page */}
                <Route 
                  path='/'
                  element={
                    <>
                      <Hero />
                      <About />
                      <Services />
                      <Resume />
                      <Portfolio />
                      <BlogList />
                      <Contact />
                    </>
                  }
                />

                {/* Página individual del Blog */}
                <Route 
                  path='/blog/:id'
                  element={<BlogPost />}
                />
              </Routes>

              {/* Toaster para mostrar los mensajes */}
              <Toaster position="top-center" richColors closeButton />
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider> 
      
    
  )
}

export default App
