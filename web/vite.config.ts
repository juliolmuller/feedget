import reactPlugin from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin(), tsconfigPathsPlugin()],
});
