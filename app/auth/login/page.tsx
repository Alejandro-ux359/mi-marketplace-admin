"use client";

import { useState } from "react";
import Head from "next/head";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;

    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      alert(`¡Cuenta creada!\n\nCorreo: ${email}`);
      setLoading(false);
      form.reset();
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Messimo | Crear cuenta</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <div className="container">
        {/* Panel izquierdo */}
        <div className="left-panel">
          <div className="decoration decoration-1" />
          <div className="decoration decoration-2" />

          <div className="logo">
            messi<span>mo</span>
          </div>
          <p className="tagline">
            Conecta con personas alrededor del mundo de forma rápida y segura
          </p>
        </div>

        {/* Panel derecho */}
        <div className="right-panel">
          <div className="form-container">
            <div className="mobile-logo">messimo</div>

            <div className="form-header">
              <h1 className="form-title">Crear cuenta</h1>
              <p className="form-subtitle">
                Únete a nuestra comunidad hoy mismo
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Correo electrónico</label>
                <div className="input-container">
                  <i className="fas fa-envelope input-icon" />
                  <input
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Contraseña</label>
                <div className="input-container">
                  <i className="fas fa-lock input-icon" />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="form-input"
                    placeholder="Crea una contraseña segura"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={`fas ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <button className="btn btn-primary" disabled={loading}>
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin" /> Creando cuenta...
                  </>
                ) : (
                  "Crear cuenta"
                )}
              </button>
            </form>

            <div className="divider">
              <span>o regístrate con</span>
            </div>

            <div className="social-login">
              <button className="social-btn google-btn">
                <i className="fab fa-google social-icon" />
                Google
              </button>
              <button className="social-btn github-btn">
                <i className="fab fa-github social-icon" />
                GitHub
              </button>
            </div>

            <p className="terms">
              Al crear una cuenta aceptas los{" "}
              <a href="#">Términos</a> y la{" "}
              <a href="#">Política de Privacidad</a>
            </p>

            <div className="form-footer">
              ¿Ya tienes una cuenta? <a href="/auth/login">Iniciar sesión</a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        :root {
          --primary: #6366f1;
          --primary-dark: #4f46e5;
          --secondary: #8b5cf6;
          --gray: #94a3b8;
          --gray-light: #e2e8f0;
          --dark: #1e293b;
          --radius: 12px;
        }

        * {
          box-sizing: border-box;
          font-family: "Segoe UI", system-ui, sans-serif;
        }

        .container {
          display: flex;
          min-height: 100vh;
          background: #f1f5f9;
        }

        .left-panel {
          flex: 1;
          display: none;
          background: linear-gradient(
            135deg,
            var(--primary),
            var(--secondary)
          );
          color: white;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        @media (min-width: 992px) {
          .left-panel {
            display: flex;
          }
        }

        .logo {
          font-size: 2.5rem;
          font-weight: 800;
        }

        .logo span {
          color: #c4b5fd;
        }

        .right-panel {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .form-container {
          background: white;
          padding: 2.5rem;
          border-radius: var(--radius);
          width: 100%;
          max-width: 450px;
        }

        .form-title {
          font-size: 2rem;
          font-weight: 700;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid var(--gray-light);
          border-radius: var(--radius);
        }

        .btn-primary {
          background: var(--primary);
          color: white;
          padding: 1rem;
          border-radius: var(--radius);
          border: none;
          width: 100%;
          cursor: pointer;
        }

        .btn-primary:hover {
          background: var(--primary-dark);
        }
      `}</style>
    </>
  );
}
