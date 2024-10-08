import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    // Set initial state
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine which technologies to display
  const displayedTechnologies = isMobile ? technologies.slice(0, 4) : technologies;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {displayedTechnologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
