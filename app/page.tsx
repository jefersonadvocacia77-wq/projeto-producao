
import Image from "next/image";

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <main
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        textAlign: "center",
        color: "#1e293b",
        backgroundColor: "#ffffff",
      }}
    >
      <header style={{ marginBottom: "35px" }}>
        <h1
          style={{
            fontSize: "36px",
            color: "#1d4ed8",
            marginBottom: "16px",
          }}
        >
          Preparação para Produção
        </h1>

        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Projeto Next.js configurado com variáveis de ambiente
          e otimização de imagens.
        </p>
      </header>

      <section
        style={{
          marginBottom: "35px",
          padding: "20px",
          backgroundColor: "#f1f5f9",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ color: "#1d4ed8" }}>Endereço da API</h2>

        <p style={{ overflowWrap: "anywhere" }}>
          {apiUrl || "Variável de ambiente não encontrada."}
        </p>
      </section>

      <section style={{ marginBottom: "35px" }}>
        <h2
          style={{
            fontSize: "26px",
            marginBottom: "20px",
          }}
        >
          Foco e produtividade
        </h2>

        <Image
          src="/foco.png"
          alt="Espaço de trabalho dedicado à programação e ao desenvolvimento"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 768px) 100vw, 860px"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.12)",
          }}
        />
      </section>

      <footer
        style={{
          borderTop: "1px solid #e2e8f0",
          paddingTop: "20px",
          color: "#64748b",
        }}
      >
        <p>Projeto Next.js preparado para testes e produção.</p>
      </footer>
    </main>
  );
}
