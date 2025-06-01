import React from 'react';

const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#0B1C3D' }}
    >
      <div
        className="card shadow-lg p-4 text-white"
        style={{
          maxWidth: '400px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
        }}
      >
        <div className="text-center mb-4">
          <img src="/logo.png" alt="Koomodo" width="50" />
          <h2 className="mt-2 fw-bold">Koomodo</h2>
        </div>

        <h5 className="text-center mb-1 fw-bold">Bienvenido de nuevo</h5>
        <p className="text-center text-white-50 mb-4">Inicia sesión en tu cuenta</p>

        <form>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="form-control mb-3 bg-dark text-white border border-secondary"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control mb-3 bg-dark text-white border border-secondary"
          />
          <button
            type="submit"
            className="btn w-100 mb-3"
            style={{ backgroundColor: '#28C76F', color: '#fff', fontWeight: 'bold' }}
          >
            Iniciar sesión
          </button>
        </form>

        <button className="btn btn-outline-light w-100 mb-2">
          📧 Iniciar sesión con correo
        </button>
        <button className="btn btn-outline-primary w-100 mb-2">
          🌐 Iniciar sesión con Facebook
        </button>
        <button className="btn btn-outline-light w-100 mb-3 border border-warning text-warning">
          🔒 Huella digital / reconocimiento facial
        </button>

        <div className="d-flex justify-content-between mt-2">
          <a href="#" className="text-white-50 text-decoration-none">¿Olvidaste tu contraseña?</a>
          <a href="#" className="text-success fw-bold text-decoration-none">Regístrate</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
