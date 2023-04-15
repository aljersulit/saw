import { React, useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Gallery from "./components/Gallery/Gallery";
import "./App.scss";

function App() {
  const [appState, setAppState] = useState({
    isLoaded: false,
    isNavActive: false,
    headerStatus: {
      active: false,
      hidden: false,
    },
    prevScrollPos: 0,
  });

  // When the side Nav is Active, body overflow is hidden
  useEffect(() => {
    if (appState.isNavActive) {
      document.body.classList.add("nav-active");
    } else {
      document.body.classList.remove("nav-active");
    }
  }, [appState.isNavActive]);

  // On Page Load
  useEffect(() => {
    document.body.classList.add("loaded");
    setAppState((prev) => {
      return {
        ...prev,
        isLoaded: true,
      };
    });
  }, []);

  return (
    <div className="App">
      <Loader isLoaded={appState.isLoaded} />
      <Header
        setAppState={setAppState}
        isNavActive={appState.isNavActive}
        headerStatus={appState.headerStatus}
        prevScrollPos={appState.prevScrollPos}
      />
      <main>
        <Hero />
        <About />
        <Intro />
        <Gallery />
        <Menu />
      </main>
    </div>
  );
}

export default App;

