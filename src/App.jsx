import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/sla';

function App() {
  return (
    <>
      <h1>LOJA VIRTUAL</h1>

      <Header
        texto="Gloss"
        imagem="https://m.media-amazon.com/images/I/71-W4OhqIkL.jpg"
        preco="R$50,00"
      />

      <Header
        texto="Kit produto de cabelo"
        imagem="https://images.tcdn.com.br/img/img_prod/1151116/kit_eudora_siage_nutri_diamond_shampoo_200ml_condicionador_250ml_mascara_250g_oleo_110ml_3053_1_8d8a4374db396cc81478f34f9f2045f8.jpg"
        preco="R$350,00"
      />

      <Header
        texto="Kit esmalte coleção mentos"
        imagem="https://images-americanas.b2w.io/produtos/7471784974/imagens/esmalte-cremoso-dailus-feat-mentos-grape-8ml-roxo-uva/7471784974_1_xlarge.jpg"
        preco="R$90,00"
      />
    </>
  );
}

export default App;
