




export default function Home() {
  return (
    
    <section style={{ textAlign: "center", minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <h1 style={{ fontSize: "3rem" }}>Pedro Henrique</h1>
      <h3 style={{ color: "var(--accent)", marginTop: "10px" }}>Desenvolvedor Front-End</h3>

      <p style={{ marginTop: "15px", color: "var(--text-secondary)" }}>
        Criando interfaces modernas, responsivas e focadas na melhor experiência do usuário.
      </p>
        
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "25px" }}>
        <a href="https://github.com/Peedroo96" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/pedro-henrique-659634220/" target="_blank">LinkedIn</a>
      </div>
    </section>
  );
}



