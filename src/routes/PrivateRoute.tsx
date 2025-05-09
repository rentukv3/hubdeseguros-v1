
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types/auth';
import { MainLayout } from '../layouts/MainLayout';

interface PrivateRouteProps {
  allowedRoles?: UserRole[];
}

const PrivateRoute = ({ allowedRoles = [] }: PrivateRouteProps) => {
  const { isAuthenticated, user } = useAuth();

  // Si no está autenticado, redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si se especifican roles permitidos y el usuario no tiene el rol adecuado
  if (allowedRoles.length > 0 && user && !allowedRoles.includes(user.role)) {
    // Redirigir al dashboard correspondiente según el rol
    switch (user.role) {
      case 'CLIENTE':
        return <Navigate to="/usuario/dashboard" replace />;
      case 'AGENTE':
        return <Navigate to="/agente/dashboard" replace />;
      case 'AGENCIA':
        return <Navigate to="/agencia/dashboard" replace />;
      case 'ADMIN':
        return <Navigate to="/admin/dashboard" replace />;
      default:
        return <Navigate to="/dashboard" replace />;
    }
  }

  // Si todo está bien, renderiza el layout principal con las rutas hijas
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PrivateRoute;
