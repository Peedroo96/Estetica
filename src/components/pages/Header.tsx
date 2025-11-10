import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      padding: "20px 40px",
      background: "#111",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      <h2 style={{ color: "var(--accent)" }}>PedroHenrique.dev</h2>

      <nav style={{ display: "flex", gap: "25px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/sobre" style={{ color: "white", textDecoration: "none" }}>Sobre</Link>
        <Link to="/habilidades" style={{ color: "white", textDecoration: "none" }}>Habilidades</Link>
        <Link to="/projetos" style={{ color: "white", textDecoration: "none" }}>Projetos</Link>
        <Link to="/contato" style={{ color: "white", textDecoration: "none" }}>Contato</Link>
      </nav>
    </header>
  );
}
