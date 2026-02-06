"use client";

import { useState } from "react";
import Head from "next/head";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Inicio de sesión correcto");
      setLoading(false);
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>RenshaMarket | Iniciar sesión</title>
      </Head>

      <div className="page">
        <div className="card">
          <h1 className="logo">
            Rensha<span>Market</span>
          </h1>

          <p className="subtitle">Inicia sesión para continuar</p>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Usuario o email" required />
            <input type="password" placeholder="Contraseña" required />

            <button type="submit" disabled={loading}>
              {loading ? "Ingresando..." : "Iniciar sesión"}
            </button>
          </form>

          <div className="divider">o continúa con</div>

          <div className="providers">
            <button className="provider google">
              <FcGoogle size={24} style={{ marginRight: "8px" }} />
              Continuar con Google
            </button>
          </div>

          <p className="footer">
            ¿No tienes cuenta? <a href="/auth/register">Crear cuenta</a>
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
          justify-content: flex-end;
          padding: 2rem 8vw;
          background: radial-gradient(
            circle at top left,
            #6366f1,
            #4338ca 40%,
            #020617 100%
          );
        }

        /* MÓVIL */
        @media (max-width: 768px) {
          .page {
            justify-content: center;
            padding: 1rem;
          }
        }

        .card {
          width: 100%;
          max-width: 420px;
          max-height: calc(100vh - 4rem);
          background: rgba(255, 255, 255, 0.96);
          border-radius: 18px;
          padding: 2.4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.35);
          animation: fadeUp 0.6s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 800;
          color: #020617;
        }

        .logo span {
          color: #6366f1;
        }

        .subtitle {
          text-align: center;
          color: #64748b;
          margin: 0.5rem 0 1.5rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          color: #0f172a;
        }

        form input {
          padding: 0.85rem 1rem;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          font-size: 1rem;
        }

        form input:focus {
          outline: none;
          border-color: #6366f1;
        }

        form button {
          margin-top: 0.5rem;
          padding: 0.9rem;
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
          margin: 1.4rem 0 0.8rem;
          color: #94a3b8;
          font-size: 0.85rem;
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
          text-align: center;
          font-size: 0.85rem;
          margin-top: 1rem;
          color: #0f172a;
        }

        .footer a {
          color: #6366f1;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
