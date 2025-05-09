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
              {/* Nuevo panel de control */}
              <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden w-full">
                {/* Barra superior */}
                <div className="bg-gray-900 p-3 flex items-center">
                  <div className="flex items-center gap-2 absolute left-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-white w-full text-center">Hubseguros - Panel de control</span>
                </div>
                
                {/* Contenido principal */}
                <div className="p-6 bg-[#F5F7FB]">
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
                        <p className="text-gray-600 mb-1">Renovaciones este mes</p>
                        <p className="text-4xl font-bold text-green-600">17</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-[#FFF8E8] border-0 shadow-sm">
                      <CardContent className="p-4 text-center">
                        <p className="text-gray-600 mb-1">Siniestros pendientes</p>
                        <p className="text-4xl font-bold text-amber-600">7</p>
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
      </section>

      {/* Resto del código permanece igual... */}
      
      {/* Beneficios Section */}
      {/* ... */}
      
      {/* Soluciones Section */}
      {/* ... */}
      
      {/* WhatsApp Button */}
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