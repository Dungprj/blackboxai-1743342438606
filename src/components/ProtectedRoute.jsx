import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ redirectPath = '/login' }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // Or loading spinner
  if (!isAuthenticated) return <Navigate to={redirectPath} replace />;

  return <Outlet />;
}