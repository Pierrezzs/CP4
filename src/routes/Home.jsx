import React from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import fundo2 from '../assets/fundo2.jpg';

function Home() {
  return (
    <>
      <div className="container">
        <header className="header">

          <div className="hero-section">
            <div className="hero-content">
              <h2 className="title">Bem-vindo ao <span>SPORT X</span></h2>
              <p className="subtitle">Equipamentos de alta performance para o seu esporte favorito</p>
              <p className="subtitle">porque o seu limite é apenas o começo!</p>
              <button className="hero-button">Começar Agora</button>
            </div>
          </div>
        </header>
      </div>
      <div className="content-section">
        <div className="about-us">
          <div className="about-text">
            <h2>O que Fazemos?</h2>
            <p>
            No nosso e-commerce, oferecemos uma seleção cuidadosamente escolhida de produtos de alta qualidade para todos os níveis de praticantes de esportes, desde iniciantes até atletas profissionais. Nossa missão é proporcionar o melhor em equipamentos, vestuário e acessórios, ajudando você a alcançar o seu máximo desempenho. Com uma plataforma fácil de usar e um atendimento dedicado, estamos aqui para garantir que você tenha tudo o que precisa para se destacar nas suas atividades esportivas favoritas.
            </p>
            <button className="about-button">Saiba Mais</button>
          </div>
          <div className="about-image">
          <img src={fundo2} alt="Sobre Nós" />

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
