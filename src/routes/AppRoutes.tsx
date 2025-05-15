
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PrivateRoute from './PrivateRoute';
import { UserRole } from '@/types/auth';

// Pages con lazy loading
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Landing = lazy(() => import('../pages/Landing'));

// Importar las nuevas páginas (sin lazy loading según la solicitud)
// Admin pages
import VistaGeneral from '../pages/admin/VistaGeneral';
import Usuarios from '../pages/admin/Usuarios';
import Agencias from '../pages/admin/Agencias';
import AgentesAdmin from '../pages/admin/Agentes'; // Renamed to avoid conflict
import Roles from '../pages/admin/Roles';
import Permisos from '../pages/admin/Permisos';
import Logs from '../pages/admin/Logs';
import Backups from '../pages/admin/Backups';
import ConfiguracionAdmin from '../pages/admin/Configuracion'; // Renamed
import Notificaciones from '../pages/admin/Notificaciones';

// Agencia pages
import ClientesAgencia from '../pages/agencia/Clientes';
import PolizasAgencia from '../pages/agencia/Polizas';
import SiniestrosAgencia from '../pages/agencia/Siniestros';
import VentasAgencia from '../pages/agencia/Ventas';
import CobrosAgencia from '../pages/agencia/Cobros';
import LeadsAgencia from '../pages/agencia/Leads';
import AgentesAgencia from '../pages/agencia/Agentes'; // Renamed
import Ramos from '../pages/agencia/Ramos';
import Aseguradoras from '../pages/agencia/Aseguradoras';
import EstadisticasAgencia from '../pages/agencia/Estadisticas';
import CotizacionesAgencia from '../pages/agencia/Cotizaciones';
import Archivos from '../pages/agencia/Archivos';
import FacturasAgencia from '../pages/agencia/Facturas';
import ConfiguracionAgencia from '../pages/agencia/Configuracion'; // Renamed
import TareasAgencia from '../pages/agencia/Tareas'; // Renamed
import CalendarioAgencia from '../pages/agencia/Calendario';

// Agente pages
import DashboardAgente from '../pages/agente/Dashboard';
import ClientesAgente from '../pages/agente/Clientes';
import PolizasAgente from '../pages/agente/Polizas';
import SiniestrosAgente from '../pages/agente/Siniestros';
import VentasAgente from '../pages/agente/Ventas';
import CobrosAgente from '../pages/agente/Cobros';
import LeadsAgente from '../pages/agente/Leads';
import TareasAgente from '../pages/agente/Tareas'; // Renamed
import CalendarioAgente from '../pages/agente/Calendario';
import EstadisticasAgente from '../pages/agente/Estadisticas';
import CotizacionesAgente from '../pages/agente/Cotizaciones';
import FacturasAgente from '../pages/agente/Facturas';

// Usuario pages
import DashboardUsuario from '../pages/usuario/Dashboard';
import MisPolizas from '../pages/usuario/MisPolizas';
import SiniestrosUsuario from '../pages/usuario/Siniestros';
import Pagos from '../pages/usuario/Pagos';
import Documentos from '../pages/usuario/Documentos';
import CotizacionesUsuario from '../pages/usuario/Cotizaciones';

// Placeholder para rutas no actualizadas
const Placeholder = lazy(() => import('../components/common/Placeholder'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
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
      case 'ADMIN':
        return '/admin/dashboard';
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
        <Route path="/register" element={<Register />} />

        {/* Rutas para CLIENTE */}
        <Route path="/usuario" element={<PrivateRoute allowedRoles={['CLIENTE', 'ADMIN']} />}>
          <Route path="dashboard" element={<DashboardUsuario />} />
          <Route path="mis-polizas" element={<MisPolizas />} />
          <Route path="siniestros" element={<SiniestrosUsuario />} />
          <Route path="pagos" element={<Pagos />} />
          <Route path="documentos" element={<Documentos />} />
          <Route path="cotizaciones" element={<CotizacionesUsuario />} />
        </Route>

        {/* Rutas para AGENTE */}
        <Route path="/agente" element={<PrivateRoute allowedRoles={['AGENTE', 'ADMIN']} />}>
          <Route path="dashboard" element={<DashboardAgente />} />
          <Route path="clientes" element={<ClientesAgente />} />
          <Route path="polizas" element={<PolizasAgente />} />
          <Route path="siniestros" element={<SiniestrosAgente />} />
          <Route path="ventas" element={<VentasAgente />} />
          <Route path="cobros" element={<CobrosAgente />} />
          <Route path="leads" element={<LeadsAgente />} />
          <Route path="tareas" element={<TareasAgente />} />
          <Route path="calendario" element={<CalendarioAgente />} />
          <Route path="estadisticas" element={<EstadisticasAgente />} />
          <Route path="cotizaciones" element={<CotizacionesAgente />} />
          <Route path="facturas" element={<FacturasAgente />} />
        </Route>

        {/* Rutas para AGENCIA */}
        <Route path="/agencia" element={<PrivateRoute allowedRoles={['AGENCIA', 'ADMIN']} />}>
          <Route path="dashboard" element={<ClientesAgencia />} /> {/* Dashboard de agencia ahora es ClientesAgencia */}
          <Route path="clientes" element={<ClientesAgencia />} />
          <Route path="polizas" element={<PolizasAgencia />} />
          <Route path="siniestros" element={<SiniestrosAgencia />} />
          <Route path="ventas" element={<VentasAgencia />} />
          <Route path="cobros" element={<CobrosAgencia />} />
          <Route path="leads" element={<LeadsAgencia />} />
          <Route path="agentes" element={<AgentesAgencia />} />
          <Route path="ramos" element={<Ramos />} />
          <Route path="aseguradoras" element={<Aseguradoras />} />
          <Route path="estadisticas" element={<EstadisticasAgencia />} />
          <Route path="cotizaciones" element={<CotizacionesAgencia />} />
          <Route path="archivos" element={<Archivos />} />
          <Route path="facturas" element={<FacturasAgencia />} />
          <Route path="configuracion" element={<ConfiguracionAgencia />} />
          {/* Tareas para agencia estaba como 'Tareas' en la definición del componente, no 'TareasAgencia'. Ajustado a TareasAgencia */}
          <Route path="tareas" element={<TareasAgencia />} /> 
          <Route path="calendario" element={<CalendarioAgencia />} />
        </Route>

        {/* Rutas para ADMIN */}
        <Route path="/admin" element={<PrivateRoute allowedRoles={['ADMIN']} />}>
          <Route path="dashboard" element={<VistaGeneral />} />
          <Route path="vista-general" element={<VistaGeneral />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="agencias" element={<Agencias />} />
          <Route path="agentes" element={<AgentesAdmin />} />
          {/* Añadiendo ruta para Notificaciones que estaba en el Sidebar pero no en AppRoutes */}
          <Route path="notificaciones" element={<Notificaciones />} /> 
          <Route path="roles" element={<Roles />} />
          <Route path="permisos" element={<Permisos />} />
          <Route path="logs" element={<Logs />} />
          <Route path="backups" element={<Backups />} />
          <Route path="configuracion" element={<ConfiguracionAdmin />} />
          {/* Rutas restantes para Admin que usan Placeholder */}
          <Route path="actividades" element={<Placeholder title="Registro de Actividades" description="Historial detallado de acciones de usuarios." />} />
          <Route path="sistema" element={<Placeholder title="Estado del Sistema" description="Monitoreo de estado y rendimiento del sistema." />} />
          <Route path="metricas/alertas" element={<Placeholder title="Alertas del Sistema" description="Centro de notificaciones de incidentes críticos." />} />
          <Route path="metricas/rendimiento" element={<Placeholder title="Rendimiento del Sistema" description="Análisis técnico de rendimiento y optimización." />} />
        </Route>

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
