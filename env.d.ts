// Ensure this file is treated as a module
export {};

declare global {
  // Manually define Vite types to avoid missing type definition errors
  interface ImportMetaEnv {
    readonly VITE_API_KEY: string;
    [key: string]: string | undefined;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  // Define NodeJS namespace structure
  namespace NodeJS {
    // Merges with existing ProcessEnv if present
    interface ProcessEnv {
      API_KEY: string;
      [key: string]: string | undefined;
    }
    
    // Merges with existing Process interface if present
    interface Process {
      env: ProcessEnv;
    }
  }
}