
import { Shield, AlertCircle, CreditCard, FileText, Calculator } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TaskList from "@/components/dashboard/TaskList";

const UserDashboard = () => {
  // Datos de ejemplo para el dashboard de cliente
  const userStats = {
    activePolizas: 3,
    pendingSiniestros: 0,
    nextPayment: {
      amount: "€150,00",
      date: "15/06/2025",
    },
    notifications: 2,
  };

  const userTasks = [
    {
      id: "1",
      title: "Renovar póliza de hogar",
      priority: "medium" as const,
      dueDate: "15/06/2025",
    },
    {
      id: "2",
      title: "Actualizar documentación",
      priority: "low" as const,
      dueDate: "30/06/2025",
    },
  ];

  const userPolicies = [
    {
      id: "P001",
      type: "Hogar",
      company: "Mapfre",
      number: "HOG-12345",
      expiryDate: "15/06/2025",
      status: "Activa",
    },
    {
      id: "P002",
      type: "Automóvil",
      company: "Allianz",
      number: "AUTO-67890",
      expiryDate: "23/09/2025",
      status: "Activa",
    },
    {
      id: "P003",
      type: "Vida",
      company: "AXA",
      number: "VIDA-54321",
      expiryDate: "05/12/2025",
      status: "Activa",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Mi Panel</h1>
      
      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Mis Pólizas"
          value={userStats.activePolizas}
          subtitle="Pólizas activas"
          icon={<Shield size={20} />}
          color="blue"
        />
        
        <DashboardCard
          title="Siniestros"
          value={userStats.pendingSiniestros}
          subtitle="Siniestros en trámite"
          icon={<AlertCircle size={20} />}
          color="green"
        />
        
        <DashboardCard
          title="Próximo Pago"
          value={userStats.nextPayment.amount}
          subtitle={`Vencimiento: ${userStats.nextPayment.date}`}
          icon={<CreditCard size={20} />}
          color="amber"
        />
      </div>
      
      {/* Pólizas activas y tareas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Mis Pólizas Activas</CardTitle>
            <CardDescription>Resumen de tus pólizas vigentes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 font-medium bg-gray-50 p-3 text-sm">
                <div>Tipo</div>
                <div>Compañía</div>
                <div>Número</div>
                <div>Vencimiento</div>
                <div>Estado</div>
              </div>
              <div className="divide-y">
                {userPolicies.map((policy) => (
                  <div key={policy.id} className="grid grid-cols-5 p-3 text-sm hover:bg-gray-50">
                    <div className="font-medium">{policy.type}</div>
                    <div>{policy.company}</div>
                    <div>{policy.number}</div>
                    <div>{policy.expiryDate}</div>
                    <div>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {policy.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <TaskList
            title="Pendientes"
            tasks={userTasks}
            emptyMessage="No tienes tareas pendientes"
          />
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <FileText className="h-6 w-6 text-hubseguros-primary mb-2" />
                  <span className="text-sm">Documentos</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Calculator className="h-6 w-6 text-hubseguros-primary mb-2" />
                  <span className="text-sm">Cotizar</span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
