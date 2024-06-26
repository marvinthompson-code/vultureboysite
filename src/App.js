import "@radix-ui/themes/styles.css";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./Pages/Home/HomePage";

// Components
import Nav from "./Components/Nav/Nav";
import VideosPage from "./Pages/Videos/VideosPage";
import ContactPage from "./Pages/Contact/ContactPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/videos" Component={VideosPage} />
        <Route exact path="/contact" Component={ContactPage} />
      </Routes>
    </div>
  );
}

export default App;
