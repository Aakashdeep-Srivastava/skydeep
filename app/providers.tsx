'use client';

import { useRef, useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppContext, { SharedState } from "../components/AppContextFolder/AppContext";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme";

interface ProvidersProps {
  children: ReactNode;
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export function Providers({ children }: ProvidersProps) {
  const queryClient = getQueryClient();

  const timerCookie = useRef<NodeJS.Timeout | null>(null);
  const windowSizeTrackerRef = useRef<((e: UIEvent) => void) | null>(null);
  const mousePositionRef = useRef<((e: MouseEvent) => void) | null>(null);

  const [sharedState, setSharedState] = useState<SharedState>({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null
      }
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ sharedState, setSharedState }}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}
