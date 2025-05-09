
import { UserRole } from '../types/auth';
import { 
  BarChart4, 
  AlertCircle, 
  CreditCard, 
  FileText, 
  Calculator, 
  Users, 
  Shield, 
  ShoppingCart, 
  UserPlus, 
  CheckSquare, 
  Calendar, 
  PieChart, 
  Folder, 
  GitBranch, 
  Building, 
  Settings 
} from "lucide-react";

export interface MenuItem {
  key: string;
  label: string;
  icon: typeof BarChart4;
  path: string;
  notificationCount?: number;
  tooltip?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface RouteConfig {
  path: string;
  sections: MenuSection[];
}

// Configuración de rutas para el rol de usuario (CLIENTE)
export const userRoutes: RouteConfig = {
  path: '/usuario/dashboard',
  sections: [
    {
      title: 'PRINCIPALES',
      items: [
        { 
          key: 'mis-polizas', 
          label: 'Mis Pólizas', 
          icon: Shield, 
          path: '/usuario/mis-polizas',
          tooltip: 'Administra tus pólizas contratadas'
        },
        { 
          key: 'siniestros', 
          label: 'Siniestros', 
          icon: AlertCircle, 
          path: '/usuario/siniestros',
          tooltip: 'Reporta y da seguimiento a tus siniestros'
        },
        { 
          key: 'pagos', 
          label: 'Pagos', 
          icon: CreditCard, 
          path: '/usuario/pagos',
          tooltip: 'Realiza y administra tus pagos'
        }
      ]
    },
    {
      title: 'GESTIÓN',
      items: [
        { 
          key: 'documentos', 
          label: 'Documentos', 
          icon: FileText, 
          path: '/usuario/documentos',
          tooltip: 'Accede a tus documentos importantes' 
        },
        { 
          key: 'cotizaciones', 
          label: 'Cotizaciones', 
          icon: Calculator, 
          path: '/usuario/cotizaciones',
          tooltip: 'Solicita cotizaciones de seguros'
        }
      ]
    }
  ]
};

// Configuración de rutas para el rol de agente
export const agentRoutes: RouteConfig = {
  path: '/agente/dashboard',
  sections: [
    {
      title: 'PRINCIPALES',
      items: [
        { 
          key: 'clientes', 
          label: 'Clientes', 
          icon: Users, 
          path: '/agente/clientes',
          tooltip: 'Administra tu cartera de clientes'
        },
        { 
          key: 'polizas', 
          label: 'Pólizas', 
          icon: Shield, 
          path: '/agente/polizas',
          tooltip: 'Gestiona las pólizas de tus clientes'
        },
        { 
          key: 'siniestros', 
          label: 'Siniestros', 
          icon: AlertCircle, 
          path: '/agente/siniestros',
          tooltip: 'Seguimiento de siniestros reportados'
        },
        { 
          key: 'ventas', 
          label: 'Ventas', 
          icon: ShoppingCart, 
          path: '/agente/ventas',
          tooltip: 'Administra tus ventas y comisiones'
        },
        { 
          key: 'cobros', 
          label: 'Cobros', 
          icon: CreditCard, 
          path: '/agente/cobros',
          tooltip: 'Gestiona cobros y pagos pendientes'
        }
      ]
    },
    {
      title: 'GESTIÓN',
      items: [
        { 
          key: 'leads', 
          label: 'Leads', 
          icon: UserPlus, 
          path: '/agente/leads',
          tooltip: 'Administra tus prospectos de clientes'
        },
        { 
          key: 'tareas', 
          label: 'Tareas', 
          icon: CheckSquare, 
          path: '/agente/tareas',
          tooltip: 'Gestiona tus tareas pendientes',
          notificationCount: 3
        },
        { 
          key: 'calendario', 
          label: 'Calendario', 
          icon: Calendar, 
          path: '/agente/calendario',
          tooltip: 'Organiza tus citas y recordatorios'
        }
      ]
    },
    {
      title: 'REPORTES',
      items: [
        { 
          key: 'estadisticas', 
          label: 'Estadísticas', 
          icon: BarChart4, 
          path: '/agente/estadisticas',
          tooltip: 'Visualiza tus indicadores de desempeño'
        },
        { 
          key: 'cotizaciones', 
          label: 'Cotizaciones', 
          icon: FileText, 
          path: '/agente/cotizaciones',
          tooltip: 'Administra tus cotizaciones',
          notificationCount: 2
        },
        { 
          key: 'facturas', 
          label: 'Facturas', 
          icon: FileText, 
          path: '/agente/facturas',
          tooltip: 'Gestiona tus facturas y comprobantes'
        }
      ]
    }
  ]
};

// Configuración de rutas para el rol de agencia
export const agencyRoutes: RouteConfig = {
  path: '/agencia/dashboard',
  sections: [
    {
      title: 'PRINCIPALES',
      items: [
        { 
          key: 'clientes', 
          label: 'Clientes', 
          icon: Users, 
          path: '/agencia/clientes',
          tooltip: 'Administra la cartera de clientes'
        },
        { 
          key: 'polizas', 
          label: 'Pólizas', 
          icon: Shield, 
          path: '/agencia/polizas',
          tooltip: 'Gestión centralizada de pólizas'
        },
        { 
          key: 'siniestros', 
          label: 'Siniestros', 
          icon: AlertCircle, 
          path: '/agencia/siniestros',
          tooltip: 'Seguimiento de siniestros reportados'
        },
        { 
          key: 'ventas', 
          label: 'Ventas', 
          icon: ShoppingCart, 
          path: '/agencia/ventas',
          tooltip: 'Control de ventas y comisiones'
        },
        { 
          key: 'cobros', 
          label: 'Cobros', 
          icon: CreditCard, 
          path: '/agencia/cobros',
          tooltip: 'Administración de cobros y pagos'
        }
      ]
    },
    {
      title: 'GESTIÓN',
      items: [
        { 
          key: 'leads', 
          label: 'Leads', 
          icon: UserPlus, 
          path: '/agencia/leads',
          tooltip: 'Gestión de prospectos' 
        },
        { 
          key: 'agentes', 
          label: 'Agentes', 
          icon: Users, 
          path: '/agencia/agentes',
          tooltip: 'Administra tu fuerza de ventas',
          notificationCount: 1
        },
        { 
          key: 'ramos', 
          label: 'Ramos', 
          icon: GitBranch, 
          path: '/agencia/ramos',
          tooltip: 'Configuración de ramos de seguros'
        },
        { 
          key: 'aseguradoras', 
          label: 'Aseguradoras', 
          icon: Building, 
          path: '/agencia/aseguradoras',
          tooltip: 'Gestiona las compañías aseguradoras'
        }
      ]
    },
    {
      title: 'REPORTES',
      items: [
        { 
          key: 'estadisticas', 
          label: 'Estadísticas', 
          icon: PieChart, 
          path: '/agencia/estadisticas',
          tooltip: 'Análisis de rendimiento y KPIs'
        },
        { 
          key: 'cotizaciones', 
          label: 'Cotizaciones', 
          icon: FileText, 
          path: '/agencia/cotizaciones',
          tooltip: 'Gestión de cotizaciones',
          notificationCount: 5
        },
        { 
          key: 'archivos', 
          label: 'Archivos', 
          icon: Folder, 
          path: '/agencia/archivos',
          tooltip: 'Repositorio de archivos y documentos'
        },
        { 
          key: 'facturas', 
          label: 'Facturas', 
          icon: FileText, 
          path: '/agencia/facturas',
          tooltip: 'Control de facturación'
        }
      ]
    },
    {
      title: 'SISTEMA',
      items: [
        { 
          key: 'configuracion', 
          label: 'Configuración', 
          icon: Settings, 
          path: '/agencia/configuracion',
          tooltip: 'Configuración general del sistema'
        }
      ]
    }
  ]
};

export const getRoutesByRole = (role: UserRole): RouteConfig => {
  switch (role) {
    case 'CLIENTE':
      return userRoutes;
    case 'AGENTE':
      return agentRoutes;
    case 'AGENCIA':
      return agencyRoutes;
    default:
      return agencyRoutes; // Por defecto, si es ADMIN mostramos la vista de agencia
  }
};
