import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check the window width
  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  // Set up event listener to detect window resize
  useEffect(() => {
    handleResize(); // Check on component mount
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* Conditionally render the Tech component only if the device width is 600px or more */}
        {!isMobile && <Tech />}
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
