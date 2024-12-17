// src/App.jsx
import React from "react";
import Form from "./components/Form";  // Importe o componente de formulário
import "./App.css";  // Importe o arquivo CSS

const App = () => {
  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <Form /> {/* Renderiza o formulário */}
    </div>
  );
};

export default App;
