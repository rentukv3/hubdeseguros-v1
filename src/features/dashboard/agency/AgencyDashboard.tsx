
import { Users, Shield, AlertCircle, CreditCard, PieChart, BarChart4, UserPlus, Settings } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TaskList from "@/components/dashboard/TaskList";

const AgencyDashboard = () => {
  // Datos de ejemplo para el dashboard de agencia
  const agencyStats = {
    clients: 124,
    clientsTrend: 12,
    policies: 218,
    policiesTrend: 8,
    claims: 7,
    revenue: {
      current: "€12,850",
      trend: 15,
    },
    agents: 5,
  };

  const agencyTasks = [
    {
      id: "1",
      title: "Revisar rendimiento de agentes",
      priority: "high" as const,
      dueDate: "Hoy",
    },
    {
      id: "2",
      title: "Analizar métricas de conversión",
      priority: "medium" as const,
      dueDate: "Mañana",
    },
    {
      id: "3",
      title: "Reunión con aseguradora Mapfre",
      priority: "medium" as const,
      dueDate: "15/06/2025",
    },
    {
      id: "4",
      title: "Actualizar convenio con AXA",
      priority: "low" as const,
      dueDate: "20/06/2025",
    },
  ];

  const topAgents = [
    {
      name: "Ana Martínez",
      policies: 45,
      commission: "€3,250",
      trend: 12,
      avatar: "AM",
    },
    {
      name: "Carlos Ruiz",
      policies: 38,
      commission: "€2,890",
      trend: 8,
      avatar: "CR",
    },
    {
      name: "Miguel Sánchez",
      policies: 32,
      commission: "€2,450",
      trend: 6,
      avatar: "MS",
    },
    {
      name: "Laura Gómez",
      policies: 27,
      commission: "€2,105",
      trend: -2,
      avatar: "LG",
    },
    {
      name: "Javier Torres",
      policies: 24,
      commission: "€1,980",
      trend: 4,
      avatar: "JT",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Panel de Control</h1>
        <div className="flex gap-2">
          <select className="text-sm rounded-md border border-gray-300 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-hubseguros-primary focus:border-transparent">
            <option value="may">Mayo 2025</option>
            <option value="abril">Abril 2025</option>
            <option value="marzo">Marzo 2025</option>
          </select>
        </div>
      </div>
      
      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Clientes"
          value={agencyStats.clients}
          trend={agencyStats.clientsTrend}
          icon={<Users size={20} />}
          color="blue"
        />
        
        <DashboardCard
          title="Pólizas"
          value={agencyStats.policies}
          trend={agencyStats.policiesTrend}
          icon={<Shield size={20} />}
          color="green"
        />
        
        <DashboardCard
          title="Siniestros Activos"
          value={agencyStats.claims}
          icon={<AlertCircle size={20} />}
          color="amber"
        />
        
        <DashboardCard
          title="Facturación Mensual"
          value={agencyStats.revenue.current}
          trend={agencyStats.revenue.trend}
          icon={<CreditCard size={20} />}
          color="purple"
        />
      </div>
      
      {/* Distribución y agentes top */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Distribución de Cartera</CardTitle>
              <CardDescription>Por tipo de seguro y compañía</CardDescription>
            </div>
            <select className="text-xs rounded-md border border-gray-300 px-2 py-1 focus:outline-none">
              <option value="policies">Por Pólizas</option>
              <option value="premium">Por Prima</option>
              <option value="commission">Por Comisión</option>
            </select>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium mb-3">Por Tipo de Seguro</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Auto</span>
                    <span>40%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Hogar</span>
                    <span>25%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Vida</span>
                    <span>20%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Salud</span>
                    <span>10%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Otros</span>
                    <span>5%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Por Compañía</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Mapfre</span>
                    <span>35%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Allianz</span>
                    <span>28%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>AXA</span>
                    <span>20%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Generali</span>
                    <span>12%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Otras</span>
                    <span>5%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <UserPlus className="h-6 w-6 text-hubseguros-primary mb-2" />
                <span className="text-sm">Nuevo Agente</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <PieChart className="h-6 w-6 text-hubseguros-primary mb-2" />
                <span className="text-sm">Reportes</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <BarChart4 className="h-6 w-6 text-hubseguros-primary mb-2" />
                <span className="text-sm">Estadísticas</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <Settings className="h-6 w-6 text-hubseguros-primary mb-2" />
                <span className="text-sm">Configuración</span>
              </button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Renovaciones este mes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-hubseguros-primary">18</div>
                <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full flex items-center">
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  <span>+4 vs mes anterior</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Top agentes y tareas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Agentes</CardTitle>
            <CardDescription>Rendimiento este mes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topAgents.map((agent, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-hubseguros-primary flex items-center justify-center text-white font-medium mr-3">
                    {agent.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{agent.name}</p>
                      <p className="font-medium">{agent.commission}</p>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <p>{agent.policies} pólizas</p>
                      <div className={agent.trend > 0 ? 'text-green-600' : 'text-red-600'}>
                        {agent.trend > 0 ? '+' : ''}{agent.trend}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <TaskList 
          title="Tareas Pendientes" 
          tasks={agencyTasks} 
        />
      </div>
    </div>
  );
};

export default AgencyDashboard;
