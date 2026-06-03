import { useState, useEffect } from 'react';

export const useTimeGreeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      
      if (hour >= 6 && hour < 12) {
        setGreeting('¡Buenos días! (●°◡°●)🎈');
      } else if (hour >= 12 && hour < 20) {
        setGreeting('¡Buenas tardes! (´▽`ʃ♡ƪ)🌯');
      } else if (hour >= 20 && hour < 24) {
        setGreeting('¡Buenas noches! (‾◡◝)🌙');
      } else {
        setGreeting('¡Que tarde! No te sobreexijas… (￣﹃￣)☕');
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  return greeting;
};