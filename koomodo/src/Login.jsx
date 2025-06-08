import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setMensaje('Inicio de sesión exitoso');
        // Redireccionar o ir a otra vista
        window.location.href = '/dashboard';
      } else {
        setMensaje(data.error || 'Credenciales incorrectas');
      }
    } catch (error) {
      setMensaje('Error de conexión con el servidor');
    }
  };

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

        {mensaje && (
          <div className="alert alert-warning py-1 text-center" style={{ fontSize: '0.9rem' }}>
            {mensaje}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Correo electrónico"
            className="form-control mb-3 bg-dark text-white border border-secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control mb-3 bg-dark text-white border border-secondary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
          <a href="#" className="text-white-50 text-decoration-none">
            ¿Olvidaste tu contraseña?
          </a>
          <a href="#" className="text-success fw-bold text-decoration-none">
            Regístrate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
