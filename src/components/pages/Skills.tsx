const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Git", "Vite"];

export default function Skills() {
  return (
    <section id="habilidades" style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Habilidades</h2>
      
      <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
        {skills.map((skill) => (
          <span key={skill} 
            style={{
              padding: "10px 18px",
              border: "1px solid var(--accent)",
              borderRadius: "6px"
            }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
