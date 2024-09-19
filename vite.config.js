import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import importDynamicModule from "vite-plugin-dynamic-import-module";

//  https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), importDynamicModule()],
});
