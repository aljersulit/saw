// import { React, useState, useEffect } from "react";
import "./loader.scss";

function Loader({ isLoaded }) {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   setIsLoaded(true);
  //   document.body.classList.add("loaded");
  // }, []);

  return (
    <div className={`preload ${isLoaded && "loaded"}`}>
      <div className="circle"></div>
      <p className="text">Steak & Wine</p>
    </div>
  );
}

export default Loader;
