import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#222", color: "#fff" }}>
        <h1>Mi Portafolio</h1>
        <nav>
          <a href="/">Inicio</a> | <a href="/proyectos">Proyectos</a> | <a href="/contacto">Contacto</a>
        </nav>
      </header>

      <main style={{ padding: "2rem" }}>{children}</main>

      <footer style={{ padding: "1rem", background: "#eee", textAlign: "center" }}>
        © 2026 Miguel - Todos los derechos reservados
      </footer>
    </div>
  );
}
