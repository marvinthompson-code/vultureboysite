import "./App.css";
import "../src/styles.css";

import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

// Pages
import HomePage from "./Pages/Home/HomePage";

// Components
import Nav from "./Components/Nav/Nav";
import ContactPage from "./Pages/Contact/ContactPage";

function App() {
  return (
    <Container
      className="App"
      sx={{
        height: "100vh",
      }}
    >
      {/* <Nav /> */}
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/contact" Component={ContactPage} />
      </Routes>
    </Container>
  );
}

export default App;
