import { Link } from 'react-router-dom';
import './Nav.css'; // Importa o CSS

function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/produtos">Produtos</Link></li>
        <li className="nav-item"><Link to="/sobre">Sobre</Link></li>
        <li className="nav-item"><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
