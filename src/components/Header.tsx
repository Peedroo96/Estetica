export default function Header() {
  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      padding: "20px 40px", 
      position: "sticky",
      top: 0,
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(8px)"
    }}>
      <h2 style={{ color: "var(--accent)" }}>PedroHenrique.dev</h2>
      <nav style={{ display: "flex", gap: "30px" }}>
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
