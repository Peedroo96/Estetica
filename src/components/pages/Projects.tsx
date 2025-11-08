const projects = [
  { name: "Projeto 1", link: "https://github.com/Peedroo96" },
  { name: "Projeto 2", link: "https://github.com/Peedroo96" },
];

export default function Projects() {
  return (
    <section id="projetos" style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Projetos</h2>

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "20px", 
        flexWrap: "wrap" 
      }}>
        {projects.map((p) => (
          <a key={p.name} href={p.link} target="_blank" 
            style={{
              border: "1px solid var(--accent)",
              padding: "20px",
              borderRadius: "6px",
              width: "200px"
            }}>
            {p.name}
          </a>
        ))}
      </div>
    </section>
  );
}
