import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.scss";

function App() {
  return (
    // Temp height
    <div className="App" style={{ height: "300vh" }}>
      <Loader />
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;

