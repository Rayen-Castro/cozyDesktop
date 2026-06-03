import React from 'react';
import { useOS } from '../context/OSContext';
import { useTimeGreeting } from '../hooks/useTimeGreeting';

export const Header = () => {
  const greeting = useTimeGreeting();
  const { windows, toggleWindow } = useOS();

  const apps = [
    { id: 'pomodoro', name: 'Pomodoro', icon: '⏱️' },
    { id: 'ramos', name: 'Ramos', icon: '📊' },
    { id: 'todo', name: 'Tareas', icon: '📝' },
    { id: 'notes', name: 'Notas', icon: '📌' },
    { id: 'spotify', name: 'Música', icon: '🎵' },
    { id: 'calendar', name: 'Calendario', icon: '📅' },
    { id: 'sketch', name: 'Pintar', icon: '🖌️' },
    { id: 'links', name: 'Enlaces', icon: '🔗' },
  ];

  return (
    <header className="w-full h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 flex items-center justify-between fixed top-0 left-0 z-50 shadow-sm">
      
      <div className="flex items-center gap-3 w-1/4">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200 shadow-inner">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3BwYTNidmthcmMxY3Z4NWhoZ3Z6cXN5OHp5NXF3NXZ6bXN5YnZiOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbhdavBnOUbYSu/giphy.gif" 
            alt="Lindo gatito saludando"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-semibold text-gray-700 text-sm md:text-base tracking-wide">
          {greeting}
        </span>
      </div>

      <nav className="flex items-center justify-center gap-2 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-200/60 shadow-inner">
        {apps.map((app) => {
          const { isOpen, isMinimized } = windows[app.id];
          const isActive = isOpen && !isMinimized;

          return (
            <button
              key={app.id}
              onClick={() => toggleWindow(app.id)}
              title={app.name}
              className={`relative text-2xl p-2 rounded-xl transition-all duration-200 hover:scale-110 hover:bg-white active:scale-95 ${
                isActive ? 'bg-white shadow-sm' : ''
              }`}
            >
              {app.icon}
              {isOpen && (
                <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-colors ${
                  isMinimized ? 'bg-yellow-400' : 'bg-green-500'
                }`} />
              )}
            </button>
          );
        })}
      </nav>

      <div className="flex justify-end w-1/4">
        <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-500 text-xs font-medium rounded-lg border border-gray-200 flex items-center gap-1 cursor-not-allowed opacity-60">
          Tema Claro
        </button>
      </div>

    </header>
  );
};