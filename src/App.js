import React from "react";
import Header from "./components/Header.js"
import Form from './components/Form.js'
import { Button, Container } from "@mui/material"


function App() {
  return (
    <Container>
      <Header />
      <Button variant="contained" color="success">
        Enviar
      </Button>
      <Form />
    </Container>

  );
}

export default App;
