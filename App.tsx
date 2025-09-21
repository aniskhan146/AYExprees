import React from 'react';
import { AuroraTextEffect } from './components/AuroraTextEffect';
import { ShinyText } from './components/ShinyText';

const App: React.FC = () => {
    return (
        <main className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-start text-center p-4 pt-0">
            <AuroraTextEffect className="-mt-4" text="AYExprees" fontSize="clamp(2.3rem, 5.5vw, 3.8rem)" />
            <ShinyText 
              className="mt-1 whitespace-nowrap [text-shadow:0_0_10px_rgba(255,255,255,0.4)]"
              size="2xl"
              weight="medium"
            >
              The smarter way to shop online, with trusted products and express delivery right to your door
            </ShinyText>
        </main>
    );
};

export default App;