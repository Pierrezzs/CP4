import React from 'react';
import '../css/estilo.css';
import Produto1 from '../assets/produto1.jpg';
import Produto2 from '../assets/produto2.jpg';
import Produto3 from '../assets/produto3.jpg';
import Produto4 from '../assets/produto4.jpg';
import Produto5 from '../assets/produto5.jpg';
import Produto6 from '../assets/produto6.jpg';
import Produto7 from '../assets/produto7.jpg';
import Produto8 from '../assets/produto8.jpg';

function Portifolio() {
  return (
    <>
      <section className="portifolio bg-image">
        <h1>Nossos Produtos</h1>
        <div className='card-cont'>
          <div className="card">
            <img src={Produto1} alt="Produto 1" />
            <h3>Faixas</h3>
            <p>Descrição do produto a ser vendido.</p>
            <button>Comprar agora</button>
          </div>      
          <div className="card">
            <img src={Produto2} alt="Produto 2" />
            <h3>Regatas</h3>
            <p>Descrição do produto a ser vendido.</p>
            <button>Comprar agora</button>
          </div> 
          <div className="card">
            <img src={Produto3} alt="Produto 3" />
            <h3>Bermuda</h3>
            <p>Descrição do produto a ser vendido.</p>
            <button>Comprar agora</button>
          </div> 
          {/* Repita os cards conforme necessário */}
          <div className="card">
            <img src={Produto4} alt="Produto 4" />
            <h3>Tênis</h3>
            <p>Descrição do produto a ser vendido.</p>
            <button>Comprar agora</button>
          </div>  
          <div className="card">
            <img src={Produto5} alt="Produto 5" />
            <h3>Meias</h3>
            <p>Descrição do produto a ser vendido.</p>
            <button>Comprar agora</button>
          </div>
          <div className="card">
            <img src={Produto6} alt="Produto 6" />
            <h3>Conjunto Esportivo</h3>
            <p>Descrição do produto a ser vendido.</p>
            <button>Comprar agora</button>
          </div>
          <div className="card">
            <img src={Produto7} alt="Produto 7" />
            <h3>Peso</h3>
            <p>Descrição do produto a ser vendido.</p>
            <button>Comprar agora</button>
          </div>
          <div className="card">
            <img src={Produto8} alt="Produto 8" />
            <h3>Garrafa de água</h3>
            <p>Descrição do produto a ser vendido.</p>
            <button>Comprar agora</button>
          </div>

        </div>
      </section>
    </>
  );
}

export default Portifolio;
