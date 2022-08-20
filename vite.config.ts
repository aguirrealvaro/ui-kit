import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PACKAGE = require("./package.json");

const validEnvs = ["development", "production"];

export default defineConfig(({ mode }) => {
  if (!validEnvs.includes(mode)) {
    const message = `Unsupported mode: "${mode}"`;
    throw Error(message);
  }

  return {
    plugins: [react()],
    server: {
      port: 3000,
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
