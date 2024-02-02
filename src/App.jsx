import "./App.css";
import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Skill } from "./components/Skill/Skill";
import { Project } from "./components/Project/Project";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { ScrollUp } from "./components/ScrollUp/ScrollUp";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
