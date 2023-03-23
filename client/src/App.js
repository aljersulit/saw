import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Loader />
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;

