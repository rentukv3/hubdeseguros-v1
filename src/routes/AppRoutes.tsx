
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PrivateRoute from './PrivateRoute';
import { UserRole } from '@/types/auth';

// Pages con lazy loading
const Login = lazy(() => import('../pages/Login'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Landing = lazy(() => import('../pages/Landing'));

// Dashboards específicos por rol
const UserDashboard = lazy(() => import('../features/dashboard/user/UserDashboard'));
const AgentDashboard = lazy(() => import('../features/dashboard/agent/AgentDashboard'));
const AgencyDashboard = lazy(() => import('../features/dashboard/agency/AgencyDashboard'));

// Páginas de ejemplo para cada sección
const Placeholder = lazy(() => import('../components/common/Placeholder'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hubseguros-primary"></div>
  </div>
);

const AppRoutes = () => {
  const { isAuthenticated, user } = useAuth();

  // Redirección inteligente basada en autenticación y rol
  const getDefaultRoute = () => {
    if (!isAuthenticated) return '/landing';
    
    switch (user?.role) {
      case 'CLIENTE':
        return '/usuario/dashboard';
      case 'AGENTE':
        return '/agente/dashboard';
      case 'AGENCIA':
        return '/agencia/dashboard';
      default:
        return '/dashboard';
    }
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Ruta raíz con redirección inteligente */}
        <Route path="/" element={<Navigate to={getDefaultRoute()} replace />} />
        
        {/* Rutas públicas */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas para CLIENTE */}
        <Route path="/usuario" element={<PrivateRoute allowedRoles={['CLIENTE', 'ADMIN']} />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="mis-polizas" element={<Placeholder title="Mis Pólizas" />} />
          <Route path="siniestros" element={<Placeholder title="Siniestros" />} />
          <Route path="pagos" element={<Placeholder title="Pagos" />} />
          <Route path="documentos" element={<Placeholder title="Documentos" />} />
          <Route path="cotizaciones" element={<Placeholder title="Cotizaciones" />} />
        </Route>

        {/* Rutas para AGENTE */}
        <Route path="/agente" element={<PrivateRoute allowedRoles={['AGENTE', 'ADMIN']} />}>
          <Route path="dashboard" element={<AgentDashboard />} />
          <Route path="clientes" element={<Placeholder title="Clientes" />} />
          <Route path="polizas" element={<Placeholder title="Pólizas" />} />
          <Route path="siniestros" element={<Placeholder title="Siniestros" />} />
          <Route path="ventas" element={<Placeholder title="Ventas" />} />
          <Route path="cobros" element={<Placeholder title="Cobros" />} />
          <Route path="leads" element={<Placeholder title="Leads" />} />
          <Route path="tareas" element={<Placeholder title="Tareas" />} />
          <Route path="calendario" element={<Placeholder title="Calendario" />} />
          <Route path="estadisticas" element={<Placeholder title="Estadísticas" />} />
          <Route path="cotizaciones" element={<Placeholder title="Cotizaciones" />} />
          <Route path="facturas" element={<Placeholder title="Facturas" />} />
        </Route>

        {/* Rutas para AGENCIA */}
        <Route path="/agencia" element={<PrivateRoute allowedRoles={['AGENCIA', 'ADMIN']} />}>
          <Route path="dashboard" element={<AgencyDashboard />} />
          <Route path="clientes" element={<Placeholder title="Clientes" />} />
          <Route path="polizas" element={<Placeholder title="Pólizas" />} />
          <Route path="siniestros" element={<Placeholder title="Siniestros" />} />
          <Route path="ventas" element={<Placeholder title="Ventas" />} />
          <Route path="cobros" element={<Placeholder title="Cobros" />} />
          <Route path="leads" element={<Placeholder title="Leads" />} />
          <Route path="agentes" element={<Placeholder title="Agentes" />} />
          <Route path="ramos" element={<Placeholder title="Ramos" />} />
          <Route path="aseguradoras" element={<Placeholder title="Aseguradoras" />} />
          <Route path="estadisticas" element={<Placeholder title="Estadísticas" />} />
          <Route path="cotizaciones" element={<Placeholder title="Cotizaciones" />} />
          <Route path="archivos" element={<Placeholder title="Archivos" />} />
          <Route path="facturas" element={<Placeholder title="Facturas" />} />
          <Route path="configuracion" element={<Placeholder title="Configuración" />} />
        </Route>

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
