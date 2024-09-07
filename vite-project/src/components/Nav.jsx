import { Link } from 'react-router-dom';
import './Nav.css'; // Importa o CSS

const Nav = () => {
  return (
    <>
      <section className="nav">
        <div className="logo">
                <img src={LogoSports} id="logo" alt="logo"/>
                 <p className="escrita-logo">FusionXport</p>
        </div>
    <ul>
          <li><Link to="/" className="Nav-item">Home</Link></li>
          <li><Link to="/produto" className="Nav-item">Produtos</Link></li>
          <li><Link to="/sobre" className="Nav-item">Sobre</Link></li>
          <li><Link to="/contato" className="Nav-item">Contato</Link></li>
        </ul>
      </section>
    </>
  );
}

export default Nav;
