declare module 'cookie-cutter' {
  interface CookieCutter {
    get(name: string): string | undefined;
    set(name: string, value: string, options?: {
      expires?: Date;
      path?: string;
      domain?: string;
      secure?: boolean;
    }): void;
  }
  const cookieCutter: CookieCutter;
  export default cookieCutter;
}
