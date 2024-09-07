import { Link } from 'react-router-dom';
import './NavStyle.jsx'; // Importa o CSS

const Nav = () => {
  return (
    <>
      <section className="nav">
        <div className="logo">
                <img src={LogoSports} id="logo" alt="logo"/>
                 <p className="escrita-logo">SportX</p>
        </div>
    <ul>
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/produto" className="nav-item">Produtos</Link></li>
          <li><Link to="/sobre" className="nav-item">Sobre</Link></li>
          <li><Link to="/contato" className="nav-item">Contato</Link></li>
        </ul>
      </section>
    </>
  );
}

export default Nav;
