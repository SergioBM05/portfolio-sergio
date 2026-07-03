import React from 'react';
import Navbar from './components/Navbar';
import Projectos from './components/Proyectos';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="bg-darkBg text-slate-100 min-h-screen font-sans antialiased selection:bg-brandGreen/30">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32">
        <AboutMe/>
        <Projectos />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm text-slate-500 border-t border-slate-800 mt-20">
        &copy; {new Date().getFullYear()} - Desarrollado con React y Tailwind CSS
      </footer>
    </div>
  );
}

export default App;