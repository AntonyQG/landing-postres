import { Tab } from '../App';

interface BottomNavProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

export default function BottomNav({ activeTab, onChange }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: 'home', label: 'Inicio' },
    { id: 'menu', icon: 'restaurant_menu', label: 'Menú' },
    { id: 'promos', icon: 'local_offer', label: 'Promos', isCenter: true },
    { id: 'location', icon: 'location_on', label: 'Ubicación' },
    { id: 'contact', icon: 'chat', label: 'Contacto' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 pb-5 pt-3 px-6 z-50 rounded-t-3xl shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-end gap-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => onChange(item.id as Tab)}
                className={`flex flex-1 flex-col items-center justify-end gap-1 relative -top-6 ${isActive ? 'text-primary' : 'text-slate-400'}`}
              >
                <div className={`h-14 w-14 rounded-full flex items-center justify-center text-white shadow-lg border-[5px] border-background-light transform transition-transform hover:scale-105 active:scale-95 ${isActive ? 'bg-primary shadow-primary/40' : 'bg-slate-400'}`}>
                  <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                </div>
                <p className={`text-[10px] tracking-wide translate-y-2 ${isActive ? 'font-bold text-primary' : 'font-medium'}`}>{item.label}</p>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id as Tab)}
              className={`flex flex-1 flex-col items-center justify-end gap-1 transition-colors group ${isActive ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
            >
              <span className={`material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform ${isActive ? "font-variation-settings-'FILL'1 text-[28px]" : ""}`}>
                {item.icon}
              </span>
              <p className={`text-[10px] tracking-wide ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</p>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
