'use client';

import { createContext, useContext, MutableRefObject } from "react";

export interface NavBarState {
  IntervalEvent: NodeJS.Timeout | null;
  scrolling: boolean | null;
  scrollSizeY: number | null;
}

export interface PortfolioState {
  NavBar: NavBarState;
}

export interface UserDataState {
  timerCookieRef: MutableRefObject<NodeJS.Timeout | null>;
  windowSizeTracker: MutableRefObject<((e: UIEvent) => void) | null>;
  mousePositionTracker: MutableRefObject<((e: MouseEvent) => void) | null>;
}

export interface TypingState {
  keyboardEvent: ((e: KeyboardEvent) => void) | null;
  eventInputLostFocus: ((e: UIEvent) => void) | null;
}

export interface SharedState {
  portfolio: PortfolioState;
  userdata: UserDataState;
  typing: TypingState;
  finishedLoading: boolean;
}

export interface AppContextValue {
  sharedState: SharedState;
  setSharedState: React.Dispatch<React.SetStateAction<SharedState>>;
}

const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContext.Provider');
  }
  return context;
}

export default AppContext;
