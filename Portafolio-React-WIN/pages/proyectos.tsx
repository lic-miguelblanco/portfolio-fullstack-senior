import Layout from "../src/components/pages/Layout";
import { ReactNode } from "react";

export default function Proyectos() {
  return (
    <div>
      <h2>Mis Proyectos</h2>
      <p>
        Aquí encontrarás una selección de proyectos en los que he trabajado, desde migraciones de
        sistemas en Java/Spring Boot hasta documentación técnica modular y portafolios en Next.js.
      </p>

      <ul>
        <li>
          <strong>Batch Processing en Informix:</strong> Automatización con Java para inserciones
          masivas con manejo robusto de errores.
        </li>
        <li>
          <strong>Portafolio Fullstack:</strong> Proyecto en React/Next.js con TypeScript y
          configuración limpia de entorno en Windows.
        </li>
        <li>
          <strong>Documentación Técnica Modular:</strong> Generación de PDFs, DWGs y cutlists para
          proyectos de construcción y fabricación.
        </li>
      </ul>
    </div>
  );
}

// Integración con Layout
Proyectos.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
