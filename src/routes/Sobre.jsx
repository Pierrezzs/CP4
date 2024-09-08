import React from 'react';
import '../css/estilo.css';
import profileImage from '../assets/produto1.jpg'; 

function Sobre() {
  return (
    <>
      <section className="sobre">
        <div className="sobre-intro">
          <div className="sobre-text">
            <h1>Olá, Somos a <span className="highlight">SportX</span></h1>
            <h2>Venha saber mais Sobre nós!</h2>
          </div>
          <div className="sobre-image">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
        
        <div className="sobre-cards"> 
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Qualidade</h3>
              <p className="card-description">Oferecemos produtos com rigoroso controle de qualidade para garantir a excelência.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Reputação</h3>
              <p className="card-description">Reconhecido no mercado por nossa dedicação e compromisso com a satisfação do cliente.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Inovação</h3>
              <p className="card-description">Sempre à frente das tendências, trazendo as últimas novidades e tecnologias esportivas.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Atendimento Personalizado</h3>
              <p className="card-description">Suporte dedicado e personalizado para atender às necessidades específicas de cada cliente.</p>
            </div>
          </div>
        </div>

        <div className="sobre-content">
          <h2>Aqui na SportX</h2>
          <p>
            O SportX é a sua principal plataforma de e-commerce dedicada a atletas e entusiastas do esporte, oferecendo uma vasta gama de produtos essenciais para potencializar o desempenho e a experiência esportiva. Nosso compromisso é fornecer equipamentos e acessórios de alta qualidade, cuidadosamente selecionados para atender às necessidades de cada atleta, desde iniciantes até profissionais. Com uma interface intuitiva e um design moderno, nosso site facilita a navegação e a compra, permitindo que você encontre rapidamente o que precisa. No SportX, você encontrará desde roupas esportivas de última geração até equipamentos especializados para diversas modalidades, como corrida, musculação, esportes coletivos e muito mais. Além disso, nos empenhamos em oferecer informações detalhadas sobre cada produto, com descrições completas e análises, para que você possa fazer escolhas informadas. Acreditamos que cada atleta merece ter acesso a produtos que não só atendem às suas necessidades, mas que também os inspirem a alcançar novos patamares. Nossa equipe de atendimento ao cliente está sempre pronta para ajudar com qualquer dúvida ou necessidade, garantindo uma experiência de compra excepcional. No SportX, nossa missão é apoiar sua jornada esportiva com qualidade, inovação e um compromisso inabalável com a excelência. Convidamos você a explorar nosso site e descobrir como podemos ajudá-lo a atingir seus objetivos e a viver sua paixão pelo esporte ao máximo.
          </p>
        </div>

      </section>
    </>
  );
}

export default Sobre;
