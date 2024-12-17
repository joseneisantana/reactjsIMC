// src/components/Form.jsx
import React, { useState } from "react";

const Form = () => {
  // Definindo os estados para armazenar os dados do formulário e o resultado do IMC
  const [formData, setFormData] = useState({
    altura: "",
    peso: "",
  });
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  // Função para atualizar os valores do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para calcular o IMC
  const calcularIMC = (altura, peso) => {
    return peso / (altura * altura);
  };

  // Função para determinar a classificação do IMC
  const obterClassificacao = (imc) => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      return "Sobrepeso";
    } else if (imc >= 30 && imc < 39.9) {
      return "Obesidade";
    } else {
      return "Obesidade grave";
    }
  };

  // Função chamada ao submeter o formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const alturaEmMetros = parseFloat(formData.altura);
    const pesoEmKg = parseFloat(formData.peso);
    
    if (isNaN(alturaEmMetros) || isNaN(pesoEmKg) || alturaEmMetros <= 0 || pesoEmKg <= 0) {
      alert("Por favor, insira valores válidos para altura e peso.");
      return;
    }
    
    const imcCalculado = calcularIMC(alturaEmMetros, pesoEmKg);
    const classificacaoIMC = obterClassificacao(imcCalculado);

    setImc(imcCalculado.toFixed(2)); // Fixando para 2 casas decimais
    setClassificacao(classificacaoIMC);
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="altura">Altura (em metros):</label>
          <input
            type="number"
            id="altura"
            name="altura"
            step="0.01"
            value={formData.altura}
            onChange={handleChange}
            placeholder="Exemplo: 1.75"
          />
        </div>
        <div>
          <label htmlFor="peso">Peso (em kg):</label>
          <input
            type="number"
            id="peso"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            placeholder="Exemplo: 70"
          />
        </div>
        <div>
          <button type="submit">Calcular IMC</button>
        </div>
      </form>

      {imc && (
        <div>
          <h3>Resultado:</h3>
          <p>IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
