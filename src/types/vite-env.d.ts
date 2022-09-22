/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
