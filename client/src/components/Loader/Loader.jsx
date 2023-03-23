import { React, useState, useEffect } from "react";
import "./loader.scss";

function Loader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className={`preload ${isLoaded && "loaded"}`}>
      <div className="circle"></div>
      <p className="text">Steak & Wine</p>
    </div>
  );
}

export default Loader;
