
import { Users, Shield, AlertCircle, CreditCard, ShoppingCart, BarChart4, UserPlus } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TaskList from "@/components/dashboard/TaskList";

const AgentDashboard = () => {
  // Datos de ejemplo para el dashboard de agente
  const agentStats = {
    clients: 24,
    clientsTrend: 8,
    policies: 37,
    policiesTrend: 5,
    claims: 3,
    sales: {
      current: "€4,250",
      target: "€5,000",
      percentage: 85,
    },
    commissions: "€950",
    commissionsTrend: 12,
  };

  const agentTasks = [
    {
      id: "1",
      title: "Llamar a María García para renovación",
      priority: "high" as const,
      dueDate: "Hoy",
    },
    {
      id: "2",
      title: "Enviar cotización seguro hogar a Pedro López",
      priority: "medium" as const,
      dueDate: "Mañana",
    },
    {
      id: "3",
      title: "Actualizar datos de póliza #5423",
      priority: "medium" as const,
      dueDate: "Esta semana",
    },
    {
      id: "4",
      title: "Revisar comisiones pendientes",
      priority: "low" as const,
      dueDate: "Esta semana",
    },
  ];

  const upcomingRenewals = [
    {
      id: "R001",
      client: "María García",
      type: "Auto",
      policy: "#5842",
      expiryDate: "10/06/2025",
      days: 3,
    },
    {
      id: "R002",
      client: "Juan Pérez",
      type: "Vida",
      policy: "#6721",
      expiryDate: "12/06/2025",
      days: 5,
    },
    {
      id: "R003",
      client: "Ana Rodríguez",
      type: "Hogar",
      policy: "#2343",
      expiryDate: "14/06/2025",
      days: 7,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Panel de Control</h1>
      
      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Clientes"
          value={agentStats.clients}
          trend={agentStats.clientsTrend}
          icon={<Users size={20} />}
          color="blue"
        />
        
        <DashboardCard
          title="Pólizas"
          value={agentStats.policies}
          trend={agentStats.policiesTrend}
          icon={<Shield size={20} />}
          color="green"
        />
        
        <DashboardCard
          title="Siniestros Activos"
          value={agentStats.claims}
          icon={<AlertCircle size={20} />}
          color="amber"
        />
        
        <DashboardCard
          title="Comisiones"
          value={agentStats.commissions}
          trend={agentStats.commissionsTrend}
          icon={<CreditCard size={20} />}
          color="purple"
        />
      </div>
      
      {/* Gráficos y objetivos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Ventas vs. Objetivo</CardTitle>
            <CardDescription>Progreso mensual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-hubseguros-primary rounded-full" 
                    style={{ width: `${agentStats.sales.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-sm font-medium">{agentStats.sales.percentage}%</p>
                <p className="text-xs text-gray-500">
                  {agentStats.sales.current} / {agentStats.sales.target}
                </p>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Auto</p>
                <p className="font-medium">€1,850</p>
                <div className="h-1 w-full bg-gray-200 rounded-full mt-2">
                  <div className="h-1 bg-blue-500 rounded-full w-3/4"></div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Hogar</p>
                <p className="font-medium">€950</p>
                <div className="h-1 w-full bg-gray-200 rounded-full mt-2">
                  <div className="h-1 bg-green-500 rounded-full w-1/2"></div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Vida</p>
                <p className="font-medium">€1,200</p>
                <div className="h-1 w-full bg-gray-200 rounded-full mt-2">
                  <div className="h-1 bg-amber-500 rounded-full w-2/3"></div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Salud</p>
                <p className="font-medium">€250</p>
                <div className="h-1 w-full bg-gray-200 rounded-full mt-2">
                  <div className="h-1 bg-purple-500 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <UserPlus className="h-6 w-6 text-hubseguros-primary mb-2" />
              <span className="text-sm">Nuevo Cliente</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <Shield className="h-6 w-6 text-hubseguros-primary mb-2" />
              <span className="text-sm">Nueva Póliza</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <ShoppingCart className="h-6 w-6 text-hubseguros-primary mb-2" />
              <span className="text-sm">Venta</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <BarChart4 className="h-6 w-6 text-hubseguros-primary mb-2" />
              <span className="text-sm">Reportes</span>
            </button>
          </CardContent>
        </Card>
      </div>
      
      {/* Vencimientos y tareas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Vencimientos Próximos</CardTitle>
            <CardDescription>Pólizas a renovar en los próximos días</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingRenewals.map((renewal) => (
                <div 
                  key={renewal.id}
                  className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                >
                  <div>
                    <p className="font-medium">{renewal.client}</p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>{renewal.type}</span>
                      <span className="mx-1">•</span>
                      <span>{renewal.policy}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`
                      text-xs font-medium px-2 py-1 rounded-full
                      ${renewal.days <= 3 ? 'bg-red-100 text-red-800' : 
                        renewal.days <= 5 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-green-100 text-green-800'}
                    `}>
                      {renewal.days} días
                    </div>
                    <p className="text-xs mt-1">{renewal.expiryDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <TaskList 
          title="Tareas Pendientes" 
          tasks={agentTasks} 
        />
      </div>
    </div>
  );
};

export default AgentDashboard;
