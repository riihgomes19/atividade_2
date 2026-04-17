
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="perfil">
        <img src="images/logo_perfil.png" alt="Minha Foto" />
        <h1>Ricardo Gomes - Desenvolvedor</h1>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span>{menuOpen ? "✖" : "☰"}</span>
      </button>

      <nav className={menuOpen ? "active" : ""}>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
      </nav>
    </header>
  );
}
