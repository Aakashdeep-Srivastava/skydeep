'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initialize theme from stored preference or system preference
    const storedTheme = localStorage.getItem('theme-storage');
    if (storedTheme) {
      try {
        const parsed = JSON.parse(storedTheme);
        if (parsed.state?.theme) {
          setTheme(parsed.state.theme);
          document.documentElement.classList.remove('dark', 'light');
          document.documentElement.classList.add(parsed.state.theme);
          return;
        }
      } catch (e) {
        console.error('Failed to parse theme storage:', e);
      }
    }

    // Fall back to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'dark'; // Default to dark
    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, [setTheme]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't manually set a preference
      const storedTheme = localStorage.getItem('theme-storage');
      if (!storedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <div className="theme-transition">
        {children}
      </div>
    );
  }

  return (
    <div className="theme-transition">
      {children}
    </div>
  );
}
