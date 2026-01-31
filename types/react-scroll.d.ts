declare module 'react-scroll' {
  import { ComponentType, ReactNode } from 'react';

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: () => void;
    onSetInactive?: () => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    spyThrottle?: number;
    activeClass?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
    onClick?: () => void;
  }

  export const Link: ComponentType<LinkProps>;
  export const Element: ComponentType<{ name: string; children?: ReactNode; className?: string }>;
  export const Events: {
    scrollEvent: {
      register: (eventName: string, callback: () => void) => void;
      remove: (eventName: string) => void;
    };
  };
  export const scrollSpy: {
    update: () => void;
  };
  export const scroller: {
    scrollTo: (to: string, options?: Record<string, unknown>) => void;
  };
  export const animateScroll: {
    scrollToTop: (options?: Record<string, unknown>) => void;
    scrollTo: (position: number, options?: Record<string, unknown>) => void;
    scrollToBottom: (options?: Record<string, unknown>) => void;
    scrollMore: (position: number, options?: Record<string, unknown>) => void;
  };
}
