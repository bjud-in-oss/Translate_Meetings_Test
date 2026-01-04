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

// Declare process globally using the NodeJS.Process type
// This declaration matches @types/node's declaration, preventing "redeclaration" errors
// while ensuring 'process' exists when types are missing.
declare var process: NodeJS.Process;
