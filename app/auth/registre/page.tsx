"use client";

import { useState } from "react";
import Head from "next/head";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      alert("Registro exitoso");
      setLoading(false);
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>RenshaMarket | Registro</title>
      </Head>

      <div className="page">
        <div className="card">
          <h1 className="logo">
            Rensha<span>Market</span>
          </h1>

          <p className="subtitle">Crea tu cuenta para continuar</p>

          <form onSubmit={handleSubmit}>
            {/* Nombres */}
            <div className="row">
              <input type="text" placeholder="Nombre" required />
              <input type="text" placeholder="Apellido" required />
            </div>

            {/* Correo */}
            <input
              type="email"
              placeholder="Correo"
              required
              className="input"
            />

            {/* Municipio + Código Postal */}
            <div className="row">
              <input
                type="text"
                placeholder="Municipio / Provincia / Estado / Localidad"
                required
              />
              <input type="text" placeholder="Código Postal" required />
            </div>

            {/* Teléfono */}
            <div className="row phone-input">
              <select defaultValue="+53" className="input">
                <option value="+53">+53</option>
              </select>
              <input
                type="tel"
                placeholder="Número de teléfono"
                required
                className="input"
              />
            </div>

            {/* Contraseña */}
            <div className="row">
              <input type="password" placeholder="Contraseña" required />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                required
              />
            </div>

            {/* Términos */}
            <label className="terms">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              Acepto los <a href="/terms">términos y condiciones</a> y la{" "}
              <a href="/privacy">política de privacidad</a>
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Registrando..." : "Registrar"}
            </button>
          </form>

          <div className="divider">o regístrate con</div>

          <div className="providers">
            <button className="provider google">
              <FcGoogle size={24} style={{ marginRight: "8px" }} />
              Continuar con Google
            </button>
          </div>

          <p className="footer">
            ¿Ya tienes cuenta? <a href="/auth/login">Iniciar sesión</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont;
        }

        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 2rem 8vw;
          background: radial-gradient(
            circle at top left,
            #6366f1,
            #4338ca 40%,
            #020617 100%
          );
        }

        @media (max-width: 768px) {
          .page {
            justify-content: center;
            padding: 1rem;
          }
        }

        .card {
          width: 100%;
          max-width: 480px;
          background: rgba(255, 255, 255, 0.97);
          border-radius: 18px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          animation: fadeUp 0.5s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          color: #020617;
        }
        .logo span {
          color: #6366f1;
        }
        .subtitle {
          text-align: center;
          color: #64748b;
          margin: 0.4rem 0 1rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          color: #0f172a;
        }

        .row {
          display: flex;
          gap: 0.5rem;
        }
        .row input,
        .row select,
        .input {
          flex: 1;
          padding: 0.65rem 0.8rem;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          font-size: 0.95rem;
        }
        .row input:focus,
        .row select:focus,
        .input:focus {
          outline: none;
          border-color: #6366f1;
        }

        .phone-input select {
          flex: 0 0 50px;
          padding: 0 0.9rem;
          font-size: 0.85rem;
          line-height: 1;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
        }
        .phone-input input {
          flex: 1;
        }

        .terms {
          display: flex;
          align-items: center;
          font-size: 0.82rem;
          gap: 0.5rem;
          margin-top: 0.2rem;
        }
        .terms a {
          color: #6366f1;
          text-decoration: none;
        }

        form button {
          margin-top: 0.5rem;
          padding: 0.7rem;
          background: #6366f1;
          border: none;
          border-radius: 10px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
        form button:hover {
          background: #4f46e5;
        }

        .divider {
          text-align: center;
          margin: 1rem 0 0.5rem;
          color: #94a3b8;
          font-size: 0.82rem;
        }

        .provider {
          width: 100%;
          padding: 0.9rem;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition:
            transform 0.15s ease,
            box-shadow 0.15s ease;
          filter: brightness(0.95);
        }

        .provider.google {
          background: white;
          color: #000; /* Texto negro */
        }

        .provider.google:hover {
          background: #f5f5f5;
        }

        .footer {
          margin-top: 1rem;
          text-align: center;
          font-size: 0.82rem;
          color: #0f172a;
        }
        .footer a {
          color: #6366f1;
          text-decoration: none;
          font-weight: 600;
        }

        @media (max-width: 500px) {
          .row {
            flex-direction: column;
          }
          .phone-input select {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
