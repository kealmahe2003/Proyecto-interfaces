import { Routes, Route, Navigate } from 'react-router-dom';
import HomePublic from './pages/HomePublic.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import MisCursos from './pages/MisCursos.jsx';
import Perfil from './pages/Perfil.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePublic />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mis-materias" element={<MisCursos />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
