import Layout from "../src/components/pages/Layout";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div>
      <h2>Bienvenido a mi portafolio</h2>
      <p>
        Aquí encontrarás mis proyectos de desarrollo fullstack, documentación técnica y ejemplos de
        automatización.
      </p>
    </div>
  );
}

// Tipamos correctamente el parámetro `page`
Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
