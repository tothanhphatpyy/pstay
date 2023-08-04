import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from 'path';

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    /* root: "./src", */
    base: "/",
    plugins: [reactRefresh()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Replace 'src' with your source directory if different
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@helpers': path.resolve(__dirname, './src/helpers'),
        '@context': path.resolve(__dirname, './src/context'),
        '@layouts': path.resolve(__dirname, './src/layouts'),

      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/scss/_variables.scss";', // Replace with the path to your shared variables file
        },
      },
    },
  });
};
