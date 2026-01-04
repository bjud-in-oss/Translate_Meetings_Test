// /// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    API_KEY: string;
    VITE_API_KEY: string;
  }

  interface Process {
    env: ProcessEnv;
  }
}
