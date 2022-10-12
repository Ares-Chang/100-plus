/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ROLL_APP_ID: string
  readonly VITE_ROLL_APP_SECRET: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
