import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Aquí puedes agregar más rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
