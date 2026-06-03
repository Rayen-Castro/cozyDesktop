import React, { createContext, useState, useContext } from 'react';

const OSContext = createContext();

export const OSProvider = ({ children }) => {
  const [windows, setWindows] = useState({
    pomodoro: { isOpen: false, isMinimized: false },
    ramos: { isOpen: false, isMinimized: false },
    todo: { isOpen: false, isMinimized: false },
    notes: { isOpen: false, isMinimized: false },
    spotify: { isOpen: false, isMinimized: false },
    calendar: { isOpen: false, isMinimized: false },
    sketch: { isOpen: false, isMinimized: false },
    links: { isOpen: false, isMinimized: false },
  });

  // Fun ventanas
  const openWindow = (appId) => {
    setWindows(prev => ({
      ...prev,
      [appId]: { isOpen: true, isMinimized: false }
    }));
  };

  const minimizeWindow = (appId) => {
    setWindows(prev => ({
      ...prev,
      [appId]: { ...prev[appId], isMinimized: true }
    }));
  };

  const closeWindow = (appId) => {
    setWindows(prev => ({
      ...prev,
      [appId]: { isOpen: false, isMinimized: false }
    }));
  };

  const toggleWindow = (appId) => {
    const app = windows[appId];
    if (!app.isOpen) {
      openWindow(appId);
    } else if (app.isMinimized) {
      openWindow(appId);
    } else {
      minimizeWindow(appId);
    }
  };

  return (
    <OSContext.Provider value={{ windows, openWindow, minimizeWindow, closeWindow, toggleWindow }}>
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => useContext(OSContext);