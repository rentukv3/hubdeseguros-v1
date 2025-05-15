import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getRoutesByRole } from '../../routes/routes.config';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { 
  FiBarChart2, 
  FiUser, 
  FiLaptop, 
  FiUsers, 
  FiCheckSquare, 
  FiFileText, 
  FiDollarSign, 
  FiBox, 
  FiClipboard, 
  FiPieChart, 
  FiFile, 
  FiAlertTriangle, 
  FiMail, 
  FiSettings, 
  FiInfo, 
  FiMapPin, 
  FiShield, 
  FiGrid, 
  FiList, 
  FiUpload, 
  FiUserPlus, 
  FiPaperclip,
  FiArrowUpRight,
  FiHome,
  FiBell,
  FiShoppingCart,
  FiCreditCard,
  FiLayout,
  FiDatabase,
  FiKey,
  FiFolder,
  FiCalendar,
  FiGitBranch,
  FiActivity
} from 'react-icons/fi';

// Mapeo de iconos de Lucide a iconos de Feather (react-icons/fi)
const iconMap = {
  'Users': FiUsers,
  'Shield': FiShield,
  'AlertCircle': FiAlertTriangle,
  'ShoppingCart': FiShoppingCart,
  'CreditCard': FiCreditCard,
  'Bell': FiBell,
  'LayoutDashboard': FiLayout,
  'Building': FiHome,
  'KeyRound': FiKey,
  'ClipboardList': FiClipboard,
  'FileText': FiFileText,
  'Database': FiDatabase,
  'Settings': FiSettings,
  'CheckSquare': FiCheckSquare,
  'Calendar': FiCalendar,
  'UserPlus': FiUserPlus,
  'GitBranch': FiGitBranch,
  'PieChart': FiPieChart,
  'Folder': FiFolder,
  'Activity': FiActivity
};

// Estructura del menú mejorado
interface MenuItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  notificationCount?: number;
  tooltip?: string;
  subMenu?: MenuItem[];
  isOpen?: boolean;
  target?: string;
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
  isDivider?: boolean;
}

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState('');
  const [menuSections, setMenuSections] = useState<MenuSection[]>([]);
  
  // Obtenemos las rutas según el rol del usuario para mantener compatibilidad
  const routeConfig = user ? getRoutesByRole(user.role) : null;

  // Efecto para inicializar el menú y convertir las rutas existentes al nuevo formato
  useEffect(() => {
    if (user && routeConfig) {
      // Crear el nuevo menú basado en las rutas existentes
      const newMenuSections = buildMenuFromRoutes(routeConfig, user.role);
      setMenuSections(newMenuSections);
    }
  }, [user, routeConfig]);

  // Construye el menú mejorado a partir de las rutas y la configuración por rol
  const buildMenuFromRoutes = (routeConfig: any, role: string) => {
    // Convertimos las rutas existentes a nuestro nuevo formato
    const sections: MenuSection[] = [];
    
    // Si el rol es ADMIN o AGENCIA, añadimos la estructura completa con submenús
    if (role === 'ADMIN' || role === 'AGENCIA') {
      // Usamos las secciones existentes como base
      routeConfig.sections.forEach((section: any, index: number) => {
        // Añadimos separadores entre grupos principales
        if (index > 0) {
          sections.push({
            isDivider: true,
            items: []
          });
        }
        
        // Convertimos la sección existente
        const newSection: MenuSection = {
          title: section.title,
          items: []
        };
        
        // Procesamos los items
        section.items.forEach((item: any) => {
          // Agregamos los submenús según la configuración
          const hasSubMenu = shouldHaveSubMenu(item.key);
          const newItem: MenuItem = {
            key: item.key,
            label: item.label,
            // Convertimos el icon de Lucide a Feather o usamos uno por defecto
            icon: getIconForItem(item.key, item.icon),
            path: item.path,
            notificationCount: item.notificationCount,
            tooltip: item.tooltip
          };
          
          // Si debe tener submenú, agregamos la estructura
          if (hasSubMenu) {
            newItem.subMenu = getSubMenuForItem(item.key, role.toLowerCase());
            newItem.isOpen = isDefaultOpen(item.key);
          }
          
          newSection.items.push(newItem);
        });
        
        sections.push(newSection);
      });
      
      // Para Admin y Agencia, agregamos sección de importación si no existe
      const hasImportSection = sections.some(
        section => section.items.some(item => item.key === 'importar-plantillas')
      );
      
      if (!hasImportSection) {
        const roleRoute = role.toLowerCase();
        sections.push({
          isDivider: true,
          items: []
        });
        sections.push({
          title: "IMPORTACIÓN",
          items: [
            { 
              key: 'importar-plantillas', 
              label: 'Importar Plantillas', 
              icon: <FiUpload size={18} />, 
              path: `/${roleRoute}/importar`,
              subMenu: [
                { 
                  key: 'imp-aseguradoras', 
                  label: 'Aseguradoras', 
                  icon: <FiShield size={18} />, 
                  path: `/${roleRoute}/importar/aseguradoras`,
                  target: '_blank'
                },
                { 
                  key: 'imp-ramos', 
                  label: 'Ramos', 
                  icon: <FiGrid size={18} />, 
                  path: `/${roleRoute}/importar/ramos`,
                  target: '_blank'
                },
                { 
                  key: 'imp-vendedores', 
                  label: 'Vendedores', 
                  icon: <FiList size={18} />, 
                  path: `/${roleRoute}/importar/vendedores`,
                  target: '_blank'
                },
                { 
                  key: 'imp-clientes', 
                  label: 'Clientes', 
                  icon: <FiUser size={18} />, 
                  path: `/${roleRoute}/importar/clientes`,
                  target: '_blank'
                },
                { 
                  key: 'imp-polizas', 
                  label: 'Pólizas', 
                  icon: <FiUsers size={18} />, 
                  path: `/${roleRoute}/importar/polizas`,
                  target: '_blank'
                }
              ]
            }
          ]
        });
      }
    } else if (role === 'CLIENTE') {
      // Para Cliente, simplificamos el menú
      sections.push({
        title: "MI CUENTA",
        items: [
          { 
            key: 'inicio', 
            label: 'Inicio', 
            icon: <FiHome size={18} />, 
            path: `/usuario/dashboard` 
          },
          { 
            key: 'mis-polizas', 
            label: 'Mis Pólizas', 
            icon: <FiUsers size={18} />, 
            path: `/usuario/mis-polizas` 
          },
          { 
            key: 'siniestros', 
            label: 'Siniestros', 
            icon: <FiAlertTriangle size={18} />, 
            path: `/usuario/siniestros` 
          },
          { 
            key: 'pagos', 
            label: 'Pagos', 
            icon: <FiDollarSign size={18} />, 
            path: `/usuario/pagos` 
          },
          { 
            key: 'documentos', 
            label: 'Documentos', 
            icon: <FiFile size={18} />, 
            path: `/usuario/documentos` 
          },
          { 
            key: 'cotizaciones', 
            label: 'Cotizaciones', 
            icon: <FiFileText size={18} />, 
            path: `/usuario/cotizaciones` 
          }
        ]
      });
    } else {
      // Para otros roles, usamos directamente la estructura de rutas
      routeConfig.sections.forEach((section: any) => {
        const newSection: MenuSection = {
          title: section.title,
          items: section.items.map((item: any) => ({
            key: item.key,
            label: item.label,
            icon: getIconForItem(item.key, item.icon),
            path: item.path,
            notificationCount: item.notificationCount,
            tooltip: item.tooltip
          }))
        };
        sections.push(newSection);
      });
    }
    
    return sections;
  };

  // Determina qué elementos deben tener submenú
  const shouldHaveSubMenu = (key: string): boolean => {
    return ['clientes', 'polizas', 'cobros', 'config-agencia'].includes(key);
  };

  // Determina qué elementos deben estar abiertos por defecto
  const isDefaultOpen = (key: string): boolean => {
    return ['clientes', 'polizas', 'config-agencia'].includes(key);
  };

  // Obtiene el icono correcto para cada elemento
  const getIconForItem = (key: string, originalIcon: any): React.ReactNode => {
    // Mapeamos algunos iconos específicos por clave
    const keyIconMap: Record<string, React.ReactNode> = {
      'inicio': <FiHome size={18} />,
      'clientes': <FiUser size={18} />,
      'polizas': <FiUsers size={18} />,
      'remisiones': <FiCheckSquare size={18} />,
      'tareas': <FiFileText size={18} />,
      'cobros': <FiDollarSign size={18} />,
      'informes': <FiPieChart size={18} />,
      'archivos': <FiFile size={18} />,
      'siniestros': <FiAlertTriangle size={18} />,
      'facturas': <FiFileText size={18} />,
      'diligencias': <FiMail size={18} />,
      'config-agencia': <FiSettings size={18} />,
      'importar-plantillas': <FiUpload size={18} />
    };

    // Si tenemos un mapeo específico por clave, lo usamos
    if (keyIconMap[key]) {
      return keyIconMap[key];
    }

    // Si no, tratamos de mapear del ícono original si es un componente
    if (originalIcon && typeof originalIcon.displayName === 'string') {
      const iconName = originalIcon.displayName;
      const mappedIcon = iconMap[iconName as keyof typeof iconMap];
      if (mappedIcon) {
        return React.createElement(mappedIcon, { size: 18 });
      }
    }

    // Fallback a un icono genérico
    return <FiGrid size={18} />;
  };

  // Configura los submenús para elementos específicos
  const getSubMenuForItem = (key: string, roleRoute: string): MenuItem[] => {
    switch (key) {
      case 'clientes':
        return [
          { 
            key: 'listado-clientes', 
            label: 'Listado de Clientes', 
            icon: <FiUser size={18} />, 
            path: `/${roleRoute}/clientes/listado` 
          },
          { 
            key: 'crm', 
            label: 'Asistente Comercial/CRM', 
            icon: <FiLaptop size={18} />, 
            path: `/${roleRoute}/clientes/crm` 
          }
        ];
      case 'polizas':
        return [
          { 
            key: 'listado-polizas', 
            label: 'Listado de Pólizas', 
            icon: <FiUsers size={18} />, 
            path: `/${roleRoute}/polizas/listado` 
          },
          { 
            key: 'cumplimiento', 
            label: 'Cumplimiento, Judicial, etc', 
            icon: <FiUsers size={18} />, 
            path: `/${roleRoute}/polizas/cumplimiento` 
          }
        ];
      case 'cobros':
        return [
          { 
            key: 'listado-pagos', 
            label: 'Listado de pagos', 
            icon: <FiDollarSign size={18} />, 
            path: `/${roleRoute}/cobros/pagos` 
          },
          { 
            key: 'recibos', 
            label: 'Recibos y Cuadre de caja', 
            icon: <FiBox size={18} />, 
            path: `/${roleRoute}/cobros/recibos` 
          },
          { 
            key: 'liquidar', 
            label: 'Liquidar vendedores', 
            icon: <FiClipboard size={18} />, 
            path: `/${roleRoute}/cobros/liquidar` 
          }
        ];
      case 'config-agencia':
        return [
          { 
            key: 'usuarios', 
            label: 'Usuarios', 
            icon: <FiUsers size={18} />, 
            path: `/${roleRoute}/configuracion/usuarios` 
          },
          { 
            key: 'info-agencia', 
            label: 'Información de agencia', 
            icon: <FiInfo size={18} />, 
            path: `/${roleRoute}/configuracion/informacion` 
          },
          { 
            key: 'sedes', 
            label: 'Sedes', 
            icon: <FiMapPin size={18} />, 
            path: `/${roleRoute}/configuracion/sedes` 
          },
          { 
            key: 'aseguradoras', 
            label: 'Aseguradoras', 
            icon: <FiShield size={18} />, 
            path: `/${roleRoute}/configuracion/aseguradoras` 
          },
          { 
            key: 'ramos', 
            label: 'Ramos', 
            icon: <FiGrid size={18} />, 
            path: `/${roleRoute}/configuracion/ramos` 
          },
          { 
            key: 'vendedores', 
            label: 'Vendedores', 
            icon: <FiList size={18} />, 
            path: `/${roleRoute}/configuracion/vendedores` 
          }
        ];
      default:
        return [];
    }
  };

  // Actualizamos la ruta activa basada en la ubicación actual
  useEffect(() => {
    const path = location.pathname;
    
    // Buscar la sección y el item activo
    if (menuSections) {
      for (const section of menuSections) {
        for (const item of section.items) {
          if (path === item.path || path.startsWith(item.path + '/')) {
            setActiveKey(item.key);
            // Si tiene submenú, abrirlo
            if (item.subMenu) {
              toggleSubMenu(item.key);
            }
            break;
          }
          
          // También comprobar en los submenús
          if (item.subMenu) {
            for (const subItem of item.subMenu) {
              if (path === subItem.path || path.startsWith(subItem.path + '/')) {
                setActiveKey(subItem.key);
                // Abrir el menú padre
                toggleSubMenu(item.key);
                break;
              }
            }
          }
        }
      }
    }
  }, [location.pathname, menuSections]);

  const handleItemClick = (path: string, key: string, target?: string) => {
    if (target === '_blank') {
      window.open(path, '_blank');
    } else {
      setActiveKey(key);
      navigate(path);
    }
  };

  const toggleSubMenu = (key: string) => {
    setMenuSections(prevSections => 
      prevSections.map(section => ({
        ...section,
        items: section.items.map(item => {
          if (item.key === key) {
            return { ...item, isOpen: !item.isOpen };
          }
          return item;
        })
      }))
    );
  };

  if (!user || menuSections.length === 0) return null;

  return (
    <div className={`h-screen bg-[#1e2e4a] transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} flex flex-col shadow-lg`}>
      {/* Logo y título */}
      <div className={`flex items-center p-4 ${collapsed ? 'justify-center' : 'justify-between'} border-b border-[#2a3c5a]`}>
        {!collapsed && (
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">HubSeguros</span>
          </div>
        )}
        {collapsed && (
          <div className="flex items-center justify-center">
            <span className="text-white font-bold text-xl">HS</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-white hover:bg-[#2a3c5a]"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      {/* Información del usuario */}
      <div className={`${collapsed ? 'py-4 px-2' : 'p-4'} border-b border-[#2a3c5a]`}>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-medium">
              {user.name.charAt(0)}
            </div>
          </div>
          {!collapsed && (
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-white truncate">{user.name}</p>
              <p className="text-xs text-gray-300 truncate">{user.role}</p>
            </div>
          )}
        </div>
      </div>

      {/* Menú de navegación */}
      <div className="flex-1 overflow-y-auto py-4">
        {menuSections.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`}>
            {section.isDivider ? (
              <Separator className="my-3 bg-[#2a3c5a]" />
            ) : (
              <div className="mb-4">
                {!collapsed && section.title && (
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2 px-4">{section.title}</h3>
                )}
                <ul>
                  {section.items.map((item) => (
                    <li key={item.key}>
                      <TooltipProvider delayDuration={300}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div 
                              className={`flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#2a3c5a] rounded-md transition-colors cursor-pointer ${
                                activeKey === item.key ? 'bg-[#2a3c5a] font-medium text-blue-400' : ''
                              }`}
                              onClick={() => {
                                if (item.subMenu) {
                                  toggleSubMenu(item.key);
                                } else {
                                  handleItemClick(item.path, item.key, item.target);
                                }
                              }}
                            >
                              <div className="relative mr-2">
                                {item.icon}
                                {item.notificationCount && (
                                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {item.notificationCount}
                                  </span>
                                )}
                              </div>
                              {!collapsed && (
                                <span className="ml-1">{item.label}</span>
                              )}
                              {!collapsed && item.notificationCount && !item.subMenu && (
                                <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 px-1.5 flex items-center justify-center">
                                  {item.notificationCount}
                                </span>
                              )}
                              {!collapsed && item.subMenu && (
                                <div className="ml-auto">
                                  <ChevronRight size={16} className={`transition-transform ${item.isOpen ? 'rotate-90' : ''}`} />
                                </div>
                              )}
                            </div>
                          </TooltipTrigger>
                          {collapsed && (
                            <TooltipContent side="right">
                              <p>{item.label}</p>
                              {item.tooltip && <p className="text-xs opacity-70">{item.tooltip}</p>}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                      
                      {/* Submenú */}
                      {!collapsed && item.subMenu && item.isOpen && (
                        <ul className="ml-6 mt-1 border-l border-[#2a3c5a] pl-2">
                          {item.subMenu.map((subItem) => (
                            <li key={subItem.key}>
                              <div 
                                className={`flex items-center px-4 py-1.5 text-sm text-gray-300 hover:bg-[#2a3c5a] rounded-md transition-colors cursor-pointer ${
                                  activeKey === subItem.key ? 'bg-[#2a3c5a] font-medium text-blue-400' : ''
                                }`}
                                onClick={() => handleItemClick(subItem.path, subItem.key, subItem.target)}
                              >
                                <div className="mr-2">{subItem.icon}</div>
                                <span>{subItem.label}</span>
                                {subItem.target === '_blank' && (
                                  <FiArrowUpRight className="ml-1 text-xs" />
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer con botón de cerrar sesión */}
      <div className={`p-4 border-t border-[#2a3c5a] ${collapsed ? 'flex justify-center' : ''}`}>
        <Button 
          variant="ghost" 
          onClick={logout} 
          className={`text-gray-300 hover:bg-[#2a3c5a] ${collapsed ? 'w-10 h-10 p-0' : 'w-full'}`}
        >
          <LogOut size={18} />
          {!collapsed && <span className="ml-2">Cerrar sesión</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
