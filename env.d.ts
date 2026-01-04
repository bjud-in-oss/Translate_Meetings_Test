/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Global constant injected by Vite define
declare const __SECURE_API_KEY__: string;

declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    API_KEY?: string;
    VITE_API_KEY?: string;
  }

  interface Process {
    env: ProcessEnv;
  }
}
