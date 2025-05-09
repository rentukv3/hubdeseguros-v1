import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { 
  BarChart4, 
  Clock, 
  Shield, 
  Users, 
  LayoutDashboard, 
  UserCircle, 
  FileText, 
  AlertTriangle, 
  DollarSign, 
  BarChart, 
  Settings
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Landing = () => {
  const { isAuthenticated, user } = useAuth();
  
  const getDashboardLink = () => {
    if (!isAuthenticated) return '/login';
    
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
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-[#0056FF]">HubSeguros</Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#caracteristicas" className="text-gray-600 hover:text-gray-900">Características</a>
              <a href="#beneficios" className="text-gray-600 hover:text-gray-900">Beneficios</a>
              <a href="#soluciones" className="text-gray-600 hover:text-gray-900">Soluciones</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Iniciar sesión</Link>
              </Button>
              <Button className="bg-[#0056FF] hover:bg-blue-600">
                <Link to="/login" className="text-white">Solicitar demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                La plataforma que simplifica tu trabajo como agente de seguros
              </h1>
              <p className="text-xl text-gray-600">
                Gestiona clientes, pólizas y siniestros en un solo lugar. Ahorra tiempo y aumenta tu productividad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#0056FF] hover:bg-blue-600 text-white">
                  <Link to={getDashboardLink()}>Comenzar ahora</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Link to="/login">Solicitar una demo</Link>
                </Button>
              </div>
            </div>
            <div className="lg:block hidden">
              {/* Panel de control */}
              <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                {/* Barra superior */}
                <div className="bg-gray-900 p-3 flex items-center">
                  <div className="flex items-center gap-2 absolute left-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-white w-full text-center">Hubseguros - Panel de control</span>
                </div>
                
                {/* Contenido principal del panel */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-64 bg-white border-r border-gray-200 py-6">
                    <div className="px-6 mb-8">
                      <h2 className="text-xl font-semibold">
                        Hub<span className="text-[#0056FF]">seguros</span>
                      </h2>
                    </div>
                    
                    <nav className="mt-6">
                      <div className="flex items-center px-6 py-3 text-sm font-medium bg-[#E8F0FF] text-[#0056FF] border-l-4 border-[#0056FF]">
                        <LayoutDashboard size={18} className="mr-3" />
                        Dashboard
                      </div>
                      
                      <div className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <UserCircle size={18} className="mr-3" />
                        Clientes
                      </div>
                      
                      <div className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <FileText size={18} className="mr-3" />
                        Pólizas
                      </div>
                      
                      <div className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <AlertTriangle size={18} className="mr-3" />
                        Siniestros
                      </div>
                      
                      <div className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <DollarSign size={18} className="mr-3" />
                        Cobros
                      </div>
                      
                      <div className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <BarChart size={18} className="mr-3" />
                        Reportes
                      </div>
                      
                      <div className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        <Settings size={18} className="mr-3" />
                        Configuración
                      </div>
                    </nav>
                  </div>
                  
                  {/* Contenido principal */}
                  <div className="flex-1 bg-[#F5F7FB] p-6">
                    {/* Tarjetas estadísticas */}
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      <Card className="bg-[#E8F0FF] border-0 shadow-sm">
                        <CardContent className="p-4 text-center">
                          <p className="text-gray-600 mb-1">Pólizas activas</p>
                          <p className="text-4xl font-bold text-[#0056FF]">117</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-[#E8F8E8] border-0 shadow-sm">
                        <CardContent className="p-4 text-center">
                          <p className="text-gray-600 mb-1"> Renovaciones pendientes     </p>
                          <p className="text-4xl font-bold text-[#0056FF]">17</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-[#FFF8E8] border-0 shadow-sm">
                        <CardContent className="p-4 text-center">
                          <p className="text-gray-600 mb-1">Siniestros pendientes</p>
                          <p className="text-4xl font-bold text-[#0056FF]">7</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Tablas de información */}
                    <div className="grid grid-cols-2 gap-6">
                      <Card className="bg-white border-0 shadow-sm">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-4">Vencimientos próximos</h3>
                          <Table>
                            <TableBody className="text-sm">
                              <TableRow className="border-b border-gray-100">
                                <TableCell className="py-3 pl-0">María García</TableCell>
                                <TableCell className="py-3 text-gray-500">Auto - 4582</TableCell>
                                <TableCell className="py-3 pr-0">
                                  <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">3 días</span>
                                </TableCell>
                              </TableRow>
                              <TableRow className="border-b border-gray-100">
                                <TableCell className="py-3 pl-0">Juan Pérez</TableCell>
                                <TableCell className="py-3 text-gray-500">Vida - 8721</TableCell>
                                <TableCell className="py-3 pr-0">
                                  <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">5 días</span>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="py-3 pl-0">Ana Rodríguez</TableCell>
                                <TableCell className="py-3 text-gray-500">Hogar - 2341</TableCell>
                                <TableCell className="py-3 pr-0">
                                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">7 días</span>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white border-0 shadow-sm">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-4">Tareas pendientes</h3>
                          <ul className="space-y-4">
                            <li className="flex items-center">
                              <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
                              <span>Llamar a cliente para renovación</span>
                            </li>
                            <li className="flex items-center">
                              <span className="w-3 h-3 rounded-full bg-[#FFC53D] mr-3"></span>
                              <span>Enviar cotización seguro hogar</span>
                            </li>
                            <li className="flex items-center">
                              <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span>
                              <span>Actualizar datos de póliza #5423</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Beneficios de usar HubSeguros</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Nuestra plataforma está diseñada específicamente para facilitar el trabajo diario de agentes, promotores y agencias de seguros.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-[#E8F0FF] rounded-md flex items-center justify-center mx-auto mb-4">
                <BarChart4 size={24} className="text-[#0056FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Organiza tu cartera</h3>
              <p className="text-gray-600 text-sm">
                Gestiona de forma eficiente tus clientes, pólizas y siniestros en una sola plataforma integrada.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-[#E8F0FF] rounded-md flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-[#0056FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ahorra tiempo</h3>
              <p className="text-gray-600 text-sm">
                Automatiza tareas repetitivas y procesos administrativos para centrarte en lo que realmente importa.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-[#E8F0FF] rounded-md flex items-center justify-center mx-auto mb-4">
                <BarChart4 size={24} className="text-[#0056FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Impulsa tus ventas</h3>
              <p className="text-gray-600 text-sm">
                Identifica oportunidades de venta cruzada y seguimiento de renovaciones para aumentar tu cartera.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-[#E8F0FF] rounded-md flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-[#0056FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Soporte humano</h3>
              <p className="text-gray-600 text-sm">
                Contamos con un equipo de especialistas que te ayudarán en todo momento con cualquier consulta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones para diferentes roles */}
      <section id="soluciones" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Soluciones adaptadas a tu rol</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            HubSeguros se adapta a tus necesidades específicas, ya sea que trabajes como agente independiente, promotor o administres una agencia completa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#0056FF] mb-4">Usuario</h3>
              <ul className="space-y-3 mb-8 min-h-[180px]">
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Panel personalizado</span>
                </li>
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Visualización de pólizas</span>
                </li>
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Alertas de vencimiento</span>
                </li>
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Reportes sencillos</span>
                </li>
              </ul>
              <Button className="w-full bg-[#0056FF] hover:bg-blue-600">Comenzar</Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-blue-200 shadow-md relative">
              <div className="absolute top-0 right-0 bg-yellow-500 text-xs uppercase font-bold text-white py-1 px-3 rounded-bl-lg rounded-tr-lg">
                Recomendado
              </div>
              <h3 className="text-2xl font-bold text-[#0056FF] mb-4">Agente</h3>
              <ul className="space-y-3 mb-8 min-h-[180px]">
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Todo lo de Usuario</span>
                </li>
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Gestión de clientes</span>
                </li>
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Seguimiento de renovaciones</span>
                </li>
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Reportes avanzados</span>
                </li>
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Gestión de comisiones</span>
                </li>
              </ul>
              <Button className="w-full bg-[#0056FF] hover:bg-blue-600">Comenzar</Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#0056FF] mb-4">Agencia</h3>
              <ul className="space-y-3 mb-8 min-h-[180px]">
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Todo lo de Agente</span>
                </li>
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Gestión de agentes</span>
                </li>
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Reportes consolidados</span>
                </li>
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Panel multiusuario</span>
                </li>
                <li className="flex items-center">
                  <Shield size={18} className="text-green-500 mr-2" />
                  <span>Personalización completa</span>
                </li>
              </ul>
              <Button className="w-full bg-[#0056FF] hover:bg-blue-600">Comenzar</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Whatsapp floating button */}
      <a 
        href="https://wa.me/5551234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default Landing;