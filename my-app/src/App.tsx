import React from "react";

import "./App.css";
import { Box } from "@chakra-ui/react";
import Header from "./components/organisms/header";
import Hero from "./components/molecules/hero";
import Movies from "./components/organisms/movies";

function App() {
  return (
    <div className="App ">
      <Box className={""}>
        <Header />
        <Hero />
        <Movies />
      </Box>
    </div>
  );
}

export default App;
