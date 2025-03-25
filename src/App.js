import React from "react";
import Header from "./components/Header.js"
import { Button, Container } from "@mui/material"


function App() {
  return (
    <Container>
      <Header />
      <Button variant="contained" color="success">
        Enviar
      </Button>
    </Container>

  );
}

export default App;
