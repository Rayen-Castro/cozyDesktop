import React from 'react';
import { OSProvider } from './context/OSContext';
import { Header } from './components/Header';

function App() {
  return (
    <OSProvider>
      <div className="w-screen h-screen bg-[#f3f4f6] text-gray-800 select-none overflow-hidden relative font-sans">
        
        <Header />

        <main className="w-full h-full pt-20 relative p-4 bg-radial-grid">
          <div className="w-full h-full border-2 border-dashed border-gray-300/40 rounded-2xl flex flex-col items-center justify-center text-gray-400/70 pointer-events-none">
            <span className="text-xl font-medium">Tu Escritorio Virtual está listo</span>
            <span className="text-sm">Haz clic en los iconos del Dock superior para probar las acciones</span>
          </div>
        </main>

      </div>
    </OSProvider>
  );
}

export default App;