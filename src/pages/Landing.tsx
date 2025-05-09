
import React from 'react';

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Dashboard Panel Visualization */}
      <div className="lg:block hidden">
        <div className="bg-white p-6 rounded-lg border-2 border-gray-800 shadow-xl">
          <div className="bg-gray-900 p-3 rounded-t-md flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-white ml-2">HubSeguros - Panel de control</span>
          </div>
          <div className="bg-white p-6 rounded-b-md">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#E8F0FF] p-4 rounded-md text-center">
                <div className="text-3xl font-bold text-blue-700 mb-1">124</div>
                <div className="text-sm text-gray-600">Pólizas activas</div>
              </div>
              <div className="bg-[#E8F8E8] p-4 rounded-md text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">18</div>
                <div className="text-sm text-gray-600">Renovaciones este mes</div>
              </div>
              <div className="bg-[#FFF8E8] p-4 rounded-md text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">7</div>
                <div className="text-sm text-gray-600">Siniestros pendientes</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-lg">Vencimientos próximos</h4>
                <h4 className="font-semibold text-lg">Tareas pendientes</h4>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="bg-white border-2 rounded-md p-3 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">María García</span>
                      <span className="text-xs bg-red-100 text-red-800 rounded px-2 py-1">3 días</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Auto - #5842</div>
                  </div>
                  <div className="bg-white border-2 rounded-md p-3 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Juan Pérez</span>
                      <span className="text-xs bg-yellow-100 text-yellow-800 rounded px-2 py-1">5 días</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Vida - #721</div>
                  </div>
                  <div className="bg-white border-2 rounded-md p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Ana Rodríguez</span>
                      <span className="text-xs bg-blue-100 text-blue-800 rounded px-2 py-1">7 días</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Hogar - #343</div>
                  </div>
                </div>
                <div>
                  <div className="bg-white border-2 rounded-md p-3 mb-3">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-[#FF4D4F] mr-3"></span>
                      <span className="text-sm">Llamar a cliente para renovación</span>
                    </div>
                  </div>
                  <div className="bg-white border-2 rounded-md p-3 mb-3">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-[#FFC53D] mr-3"></span>
                      <span className="text-sm">Enviar cotización seguro hogar</span>
                    </div>
                  </div>
                  <div className="bg-white border-2 rounded-md p-3">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-[#69C0FF] mr-3"></span>
                      <span className="text-sm">Actualizar datos de póliza #5423</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
