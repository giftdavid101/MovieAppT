import React from "react";

import "./App.css";
import { Box } from "@chakra-ui/react";
import Header from "./components/organisms/header";
import Hero from "./components/molecules/hero";

function App() {
  return (
    <div className="App ">
      <Box className={""}>
        <Header />
        <Hero />
      </Box>
    </div>
  );
}

export default App;
