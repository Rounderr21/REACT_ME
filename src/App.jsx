import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Navbar from './components/navbar/Navbar';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Default to 'home'

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;

      // Add cases for other pages if needed

      case 'home':
      default:
        return <Header />;
    }
  };

  return (
    <Layout>
      <Navbar onPageChange={handlePageChange} />
      {renderPage()}
    </Layout>
  );
}

export default App;
