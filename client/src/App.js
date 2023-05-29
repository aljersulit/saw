import { React, useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location/Location";
import Testimonials from "./components/Testimonials/Testimonials";
import Features from "./components/Features/Features";
import Upcoming from "./components/Upcoming/Upcoming";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
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
    isMapActive: false,
    activeSection: "",
  });

  // When the side Nav is Active, body overflow is hidden
  useEffect(() => {
    if (appState.isNavActive || appState.isMapActive) {
      document.body.classList.add("navOrMap-active");
    } else {
      document.body.classList.remove("navOrMap-active");
    }
  }, [appState.isNavActive, appState.isMapActive]);

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
        activeSection={appState.activeSection}
      />
      <main>
        <Hero />
        <About />
        <Intro />
        <Gallery />
        <Menu />
        <Testimonials />
        <Location
          setAppState={setAppState}
          isMapActive={appState.isMapActive}
        />
        <Features />
        <Upcoming />
      </main>
      <Footer />
      <BackToTop active={appState.headerStatus.active} />
    </div>
  );
}

export default App;

