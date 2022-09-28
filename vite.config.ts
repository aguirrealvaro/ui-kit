import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PACKAGE = require("./package.json");

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    define: {
      "process.env": {
        ...loadEnv(mode, process.cwd(), ""),
        MODE: mode,
        APP_VERSION: PACKAGE.version,
      },
    },
  };
});
