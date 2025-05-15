import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState('');
  
  // Obtenemos las rutas según el rol del usuario
  const routeConfig = user ? getRoutesByRole(user.role) : null;

  // Actualizamos la ruta activa basada en la ubicación actual
  useEffect(() => {
    const path = location.pathname;
    
    // Buscar la sección y el item activo
    if (routeConfig) {
      for (const section of routeConfig.sections) {
        for (const item of section.items) {
          if (path === item.path || path.startsWith(item.path + '/')) {
            setActiveKey(item.key);
            break;
          }
        }
      }
    }
  }, [location.pathname, menuSections]);

  const handleItemClick = (path: string, key: string) => {
    navigate(path);
    setActiveKey(key);
  };

  if (!user || !routeConfig) return null;

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
        {routeConfig.sections.map((section) => (
          <div key={section.title} className="mb-6">
            {!collapsed && (
              <h3 className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2 px-4">{section.title}</h3>
            )}
            <ul>
              {section.items.map((item) => (
                <TooltipProvider key={item.key} delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <li 
                        className={`flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#2a3c5a] rounded-md transition-colors cursor-pointer mb-1 ${
                          activeKey === item.key ? 'bg-[#2a3c5a] font-medium text-blue-400' : ''
                        }`}
                        onClick={() => handleItemClick(item.path, item.key)}
                      >
                        <div className="relative">
                          <item.icon size={18} />
                          {item.notificationCount && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                              {item.notificationCount}
                            </span>
                          )}
                        </div>
                        {!collapsed && (
                          <span className="ml-3">{item.label}</span>
                        )}
                        {!collapsed && item.notificationCount && (
                          <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 px-1.5 flex items-center justify-center">
                            {item.notificationCount}
                          </span>
                        )}
                      </li>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right">
                        <p>{item.label}</p>
                        {item.tooltip && <p className="text-xs opacity-70">{item.tooltip}</p>}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              ))}
            </ul>
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
