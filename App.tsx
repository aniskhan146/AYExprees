import React from 'react';
import { AuroraTextEffect } from './components/AuroraTextEffect';
import { ShinyText } from './components/ShinyText';
import Dock from './components/Dock';
import { Home, Store, ShoppingCart, User, Settings } from 'lucide-react';

const App: React.FC = () => {
    const dockItems = [
      {
        icon: <Home size={24} />,
        label: 'Home',
        onClick: () => console.log('Home clicked')
      },
      {
        icon: <Store size={24} />,
        label: 'Shop',
        onClick: () => console.log('Shop clicked')
      },
      {
        icon: <ShoppingCart size={24} />,
        label: 'Cart',
        onClick: () => console.log('Cart clicked'),
        badgeCount: 3,
      },
      {
        icon: <User size={24} />,
        label: 'Account',
        onClick: () => console.log('Account clicked')
      },
      {
        icon: <Settings size={24} />,
        label: 'Settings',
        onClick: () => console.log('Settings clicked')
      }
    ];

    return (
        <main className="relative min-h-screen bg-black text-white font-sans flex flex-col items-center justify-start text-center p-4 pt-0">
            <AuroraTextEffect className="-mt-4" text="AYExprees" fontSize="clamp(2.3rem, 5.5vw, 3.8rem)" />
            <ShinyText 
              className="mt-1 whitespace-nowrap [text-shadow:0_0_10px_rgba(255,255,255,0.4)]"
              size="2xl"
              weight="medium"
            >
              The smarter way to shop online, with trusted products and express delivery right to your door
            </ShinyText>
            
            <Dock items={dockItems} baseItemSize={40} magnification={48} />
        </main>
    );
};

export default App;