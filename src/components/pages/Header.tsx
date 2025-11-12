import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        position: "sticky",
        top: 0,
        background: "rgba(10,10,20,0.7)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--accent)",
        zIndex: 100,
      }}
    >
      <h2 style={{ color: "var(--accent2)" }}>PedroHenrique.dev</h2>

      <nav style={{ display: "flex", gap: "30px" }}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/habilidades">Habilidades</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}
