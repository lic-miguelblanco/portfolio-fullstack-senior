import Layout from "../src/components/pages/Layout";
import { ReactNode, useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías integrar un servicio de envío (EmailJS, API propia, etc.)
    alert("Mensaje enviado correctamente");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div>
      <h2>Contacto</h2>
      <p>Si deseas ponerte en contacto conmigo, completa el siguiente formulario:</p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={5}
          required
        />
        <button type="submit" style={{ padding: "0.5rem", background: "#222", color: "#fff", border: "none" }}>
          Enviar
        </button>
      </form>
    </div>
  );
}

// Integración con Layout
Contacto.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
