import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomeView from './views/HomeView';
import MenuView from './views/MenuView';
import PromosView from './views/PromosView';
import LocationView from './views/LocationView';
import ContactView from './views/ContactView';

export type Tab = 'home' | 'menu' | 'promos' | 'location' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderView = () => {
    switch (activeTab) {
      case 'home': return <HomeView key="home" />;
      case 'menu': return <MenuView key="menu" />;
      case 'promos': return <PromosView key="promos" />;
      case 'location': return <LocationView key="location" />;
      case 'contact': return <ContactView key="contact" />;
      default: return <HomeView key="home" />;
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header activeTab={activeTab} />
      
      <main className="flex-1 pb-32 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}
