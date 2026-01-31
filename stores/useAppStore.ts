import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface NavBarState {
  IntervalEvent: NodeJS.Timeout | null;
  scrolling: boolean | null;
  scrollSizeY: number | null;
}

interface PortfolioState {
  NavBar: NavBarState;
}

interface TypingState {
  keyboardEvent: ((e: KeyboardEvent) => void) | null;
  eventInputLostFocus: ((e: UIEvent) => void) | null;
}

interface AppState {
  // Portfolio state
  portfolio: PortfolioState;

  // Typing state
  typing: TypingState;

  // Loading state
  finishedLoading: boolean;

  // Actions
  setFinishedLoading: (value: boolean) => void;
  setNavBarScrolling: (scrolling: boolean | null) => void;
  setNavBarScrollSizeY: (scrollSizeY: number | null) => void;
  setNavBarIntervalEvent: (event: NodeJS.Timeout | null) => void;
  setTypingKeyboardEvent: (event: ((e: KeyboardEvent) => void) | null) => void;
  setTypingInputLostFocus: (event: ((e: UIEvent) => void) | null) => void;
  resetPortfolioNavBar: () => void;
  resetTyping: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      portfolio: {
        NavBar: {
          IntervalEvent: null,
          scrolling: null,
          scrollSizeY: null,
        },
      },
      typing: {
        keyboardEvent: null,
        eventInputLostFocus: null,
      },
      finishedLoading: false,

      // Actions
      setFinishedLoading: (value) =>
        set({ finishedLoading: value }),

      setNavBarScrolling: (scrolling) =>
        set((state) => ({
          portfolio: {
            ...state.portfolio,
            NavBar: { ...state.portfolio.NavBar, scrolling },
          },
        })),

      setNavBarScrollSizeY: (scrollSizeY) =>
        set((state) => ({
          portfolio: {
            ...state.portfolio,
            NavBar: { ...state.portfolio.NavBar, scrollSizeY },
          },
        })),

      setNavBarIntervalEvent: (IntervalEvent) => {
        // Clear existing interval before setting new one
        const currentInterval = get().portfolio.NavBar.IntervalEvent;
        if (currentInterval) {
          clearInterval(currentInterval);
        }
        set((state) => ({
          portfolio: {
            ...state.portfolio,
            NavBar: { ...state.portfolio.NavBar, IntervalEvent },
          },
        }));
      },

      setTypingKeyboardEvent: (keyboardEvent) =>
        set((state) => ({
          typing: { ...state.typing, keyboardEvent },
        })),

      setTypingInputLostFocus: (eventInputLostFocus) =>
        set((state) => ({
          typing: { ...state.typing, eventInputLostFocus },
        })),

      resetPortfolioNavBar: () => {
        const currentInterval = get().portfolio.NavBar.IntervalEvent;
        if (currentInterval) {
          clearInterval(currentInterval);
        }
        set((state) => ({
          portfolio: {
            ...state.portfolio,
            NavBar: {
              IntervalEvent: null,
              scrolling: null,
              scrollSizeY: null,
            },
          },
        }));
      },

      resetTyping: () =>
        set((state) => ({
          typing: {
            keyboardEvent: null,
            eventInputLostFocus: null,
          },
        })),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        finishedLoading: state.finishedLoading,
      }),
    }
  )
);
