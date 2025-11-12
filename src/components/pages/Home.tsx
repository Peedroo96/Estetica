export default function Home() {
  return (
    <section
      style={{
        textAlign: "center",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          background: "linear-gradient(90deg, var(--accent), var(--accent2))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 10px rgba(107,91,255,0.5)",
        }}
      >
        Pedro Henrique
      </h1>

      <h3 style={{ color: "var(--text-secondary)", marginTop: "10px" }}>
        Desenvolvedor Front-End
      </h3>

      <p
        style={{
          marginTop: "15px",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          margin: "15px auto",
          lineHeight: "1.6",
        }}
      >
        Criando interfaces modernas, responsivas e focadas na melhor experiência do usuário.
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <a
          href="https://github.com/Peedroo96"
          target="_blank"
          style={{
            padding: "10px 20px",
            border: "1px solid var(--accent)",
            borderRadius: "8px",
            boxShadow: "0 0 10px var(--accent)",
          }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-henrique-659634220/"
          target="_blank"
          style={{
            padding: "10px 20px",
            border: "1px solid var(--accent2)",
            borderRadius: "8px",
            boxShadow: "0 0 10px var(--accent2)",
          }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}