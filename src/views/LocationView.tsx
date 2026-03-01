import { motion } from 'motion/react';

export default function LocationView() {
  return (
    <div className="px-4 flex flex-col gap-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full relative rounded-[2rem] overflow-hidden shadow-lg border border-white/20 bg-slate-200 aspect-[4/3] group"
      >
        <div className="absolute inset-0 map-pattern opacity-60"></div>
        <div className="absolute inset-0">
          <div className="absolute top-[40%] left-0 w-full h-3 bg-white/50 rotate-3"></div>
          <div className="absolute top-0 left-[60%] w-3 h-full bg-white/50 -rotate-6"></div>
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-3 bg-white/50 rotate-45"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center animate-bounce duration-1000">
          <div className="relative">
            <span className="material-symbols-outlined text-primary text-5xl drop-shadow-lg font-variation-settings-'FILL'1">location_on</span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="px-3 py-1 bg-white rounded-lg shadow-md border border-primary/20 mt-1">
            <p className="text-xs font-bold text-primary whitespace-nowrap">¡Aquí estamos!</p>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <button className="bg-white p-2 rounded-xl shadow-lg text-slate-600 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-xl">my_location</span>
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Nuestra Ubicación</h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Av. del Postre 123, Colonia Dulzura, <br/>Ciudad de Sabor, CP 54321
          </p>
        </div>
        <motion.button whileTap={{ scale: 0.95 }} className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25">
          <span className="material-symbols-outlined">near_me</span>
          <span>Cómo llegar</span>
        </motion.button>
      </div>

      <div className="h-px w-full bg-slate-200 my-2"></div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">local_shipping</span>
          Zonas de Entrega
        </h2>
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Zona Centro y Alrededores</h3>
              <p className="text-xs text-slate-500 mt-1">Entrega gratuita en pedidos mayores a $200. Tiempo estimado: 30-45 min.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
              <span className="material-symbols-outlined">two_wheeler</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Zona Norte y Sur</h3>
              <p className="text-xs text-slate-500 mt-1">Costo de envío $35. Tiempo estimado: 45-60 min.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-2">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">schedule</span>
          Horarios
        </h2>
        <div className="bg-white p-4 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-sm font-medium text-slate-600">Lunes - Viernes</span>
            <span className="text-sm font-bold text-slate-900">10:00 AM - 9:00 PM</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-sm font-medium text-slate-600">Sábado</span>
            <span className="text-sm font-bold text-slate-900">11:00 AM - 10:00 PM</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm font-medium text-slate-600">Domingo</span>
            <span className="text-sm font-bold text-slate-900">12:00 PM - 8:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
