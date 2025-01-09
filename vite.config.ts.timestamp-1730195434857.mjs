// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import viteCompression from "vite-plugin-compression";
import dts from "vite-plugin-dts";
var __vite_injected_original_dirname = "E:\\Win\\code\\giteeTuiPlus";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts(),
    vueJsx(),
    vueSetupExtend(),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz"
    })
  ],
  server: {
    host: "0.0.0.0",
    port: 3300,
    open: true,
    https: false,
    proxy: {
      "^/mes": {
        target: `http://10.0.10.243:5000/mesv2/`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/mes/, "")
      },
      "^/portal-user": {
        target: `http://10.0.10.240:8172`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/portal-user/, "/portal-user")
      },
      "^/portal-sso": {
        target: `http://10.0.10.240:8171`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/portal-sso/, "/portal-sso")
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "packages")
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".mjs"]
  },
  build: {
    outDir: "lib",
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    },
    lib: {
      entry: "./packages/index.ts",
      name: "t-ui-plus",
      fileName: "t-ui-plus"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxXaW5cXFxcY29kZVxcXFxnaXRlZVR1aVBsdXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFdpblxcXFxjb2RlXFxcXGdpdGVlVHVpUGx1c1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovV2luL2NvZGUvZ2l0ZWVUdWlQbHVzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgdnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCcgLy8gXHU4QkJFXHU3RjZFbmVtZVx1NUM1RVx1NjAyN1xuLy8gaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZScgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uJyAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTUzOEJcdTdGMjlcbi8vIGltcG9ydCB7dmlzdWFsaXplcn0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJyAvLyBcdTYyNTNcdTUzMDVcdTU0MEVcdTc2ODRcdTg5QzZcdTU2RkVcdTY1ODdcdTRFRjZcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGR0cygpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIHZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICBkaXNhYmxlOiBmYWxzZSwgLy8gXHU0RTBEXHU3OTgxXHU3NTI4XHU1MzhCXHU3RjI5XG4gICAgICBkZWxldGVPcmlnaW5GaWxlOiBmYWxzZSwgLy8gXHU1MzhCXHU3RjI5XHU1NDBFXHU2NjJGXHU1NDI2XHU1MjIwXHU5NjY0XHU1MzlGXHU2NTg3XHU0RUY2XG4gICAgICB0aHJlc2hvbGQ6IDEwMjQwLCAvLyBcdTUzOEJcdTdGMjlcdTUyNERcdTY3MDBcdTVDMEZcdTY1ODdcdTRFRjZcdTU5MjdcdTVDMEZcbiAgICAgIGFsZ29yaXRobTogJ2d6aXAnLCAvLyBcdTUzOEJcdTdGMjlcdTdCOTdcdTZDRDVcbiAgICAgIGV4dDogJy5neicsIC8vIFx1NjU4N1x1NEVGNlx1N0M3Qlx1NTc4QlxuICAgIH0pLFxuICAgIC8vIHZpc3VhbGl6ZXIoe1xuICAgIC8vICAgb3Blbjp0cnVlLCAgLy9cdTZDRThcdTYxMEZcdThGRDlcdTkxQ0NcdTg5ODFcdThCQkVcdTdGNkVcdTRFM0F0cnVlXHVGRjBDXHU1NDI2XHU1MjE5XHU2NUUwXHU2NTQ4XG4gICAgLy8gICBnemlwU2l6ZTp0cnVlLFxuICAgIC8vICAgYnJvdGxpU2l6ZTp0cnVlXG4gICAgLy8gfSlcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJzAuMC4wLjAnLFxuICAgIHBvcnQ6IDMzMDAsXG4gICAgb3BlbjogdHJ1ZSxcbiAgICBodHRwczogZmFsc2UsXG4gICAgcHJveHk6IHtcbiAgICAgICdeL21lcyc6IHtcbiAgICAgICAgdGFyZ2V0OiBgaHR0cDovLzEwLjAuMTAuMjQzOjUwMDAvbWVzdjIvYCxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocCkgPT4gcC5yZXBsYWNlKC9eXFwvbWVzLywgJycpLFxuICAgICAgfSxcbiAgICAgICdeL3BvcnRhbC11c2VyJzoge1xuICAgICAgICB0YXJnZXQ6IGBodHRwOi8vMTAuMC4xMC4yNDA6ODE3MmAsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgcmV3cml0ZTogKHApID0+IHAucmVwbGFjZSgvXlxcL3BvcnRhbC11c2VyLywgJy9wb3J0YWwtdXNlcicpLFxuICAgICAgfSxcbiAgICAgICdeL3BvcnRhbC1zc28nOiB7XG4gICAgICAgIHRhcmdldDogYGh0dHA6Ly8xMC4wLjEwLjI0MDo4MTcxYCxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocCkgPT4gcC5yZXBsYWNlKC9eXFwvcG9ydGFsLXNzby8sICcvcG9ydGFsLXNzbycpLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgLy8gXHU5MTREXHU3RjZFXHU1MjJCXHU1NDBEXG4gICAgYWxpYXM6IHtcbiAgICAgIC8vICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdleGFtcGxlcycpLFxuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3BhY2thZ2VzJyksXG4gICAgfSxcbiAgICAvLyBcdTdDN0JcdTU3OEJcdUZGMUEgc3RyaW5nW10gXHU1QkZDXHU1MTY1XHU2NUY2XHU2MEYzXHU4OTgxXHU3NzAxXHU3NTY1XHU3Njg0XHU2MjY5XHU1QzU1XHU1NDBEXHU1MjE3XHU4ODY4XHUzMDAyXG4gICAgZXh0ZW5zaW9uczogWycuanMnLCAnLnRzJywgJy5qc3gnLCAnLnRzeCcsICcuanNvbicsICcudnVlJywgJy5tanMnXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdsaWInLFxuICAgIC8vIGNzc0NvZGVTcGxpdDogdHJ1ZSwgLy8gXHU1RjNBXHU1MjM2XHU1MTg1XHU4MDU0Q1NTXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gXHU4QkY3XHU3ODZFXHU0RkREXHU1OTE2XHU5MEU4XHU1MzE2XHU5MEEzXHU0RTlCXHU0RjYwXHU3Njg0XHU1RTkzXHU0RTJEXHU0RTBEXHU5NzAwXHU4OTgxXHU3Njg0XHU0RjlEXHU4RDU2XG4gICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsaWI6IHtcbiAgICAgIC8vIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3BhY2thZ2VzL2luZGV4LnRzJyksXG4gICAgICBlbnRyeTogJy4vcGFja2FnZXMvaW5kZXgudHMnLFxuICAgICAgbmFtZTogJ3QtdWktcGx1cycsXG4gICAgICAvLyBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddLFxuICAgICAgLy8gZm9ybWF0czogWydlcycsICd1bWQnLCAnY2pzJ10sXG4gICAgICBmaWxlTmFtZTogJ3QtdWktcGx1cycsXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtRLFNBQVMsb0JBQW9CO0FBQy9SLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sb0JBQW9CO0FBRTNCLE9BQU8scUJBQXFCO0FBRTVCLE9BQU8sU0FBUztBQVJoQixJQUFNLG1DQUFtQztBQVd6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixnQkFBZ0I7QUFBQSxNQUNkLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULGtCQUFrQjtBQUFBLE1BQ2xCLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxFQU1IO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsVUFBVSxFQUFFO0FBQUEsTUFDeEM7QUFBQSxNQUNBLGlCQUFpQjtBQUFBLFFBQ2YsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLGtCQUFrQixjQUFjO0FBQUEsTUFDNUQ7QUFBQSxNQUNBLGdCQUFnQjtBQUFBLFFBQ2QsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLGlCQUFpQixhQUFhO0FBQUEsTUFDMUQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBRVAsT0FBTztBQUFBLE1BRUwsS0FBSyxRQUFRLGtDQUFXLFVBQVU7QUFBQSxJQUNwQztBQUFBLElBRUEsWUFBWSxDQUFDLE9BQU8sT0FBTyxRQUFRLFFBQVEsU0FBUyxRQUFRLE1BQU07QUFBQSxFQUNwRTtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBRVIsZUFBZTtBQUFBLE1BRWIsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFFTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFFSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFHTixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
