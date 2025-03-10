import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the Vite configuration
export default defineConfig({
  plugins: [react()],
  base:"/himeshaPathiranaWeb",
  resolve: {
    alias: {
      '@fortawesome/free-brands-svg-icons': '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons': '@fortawesome/free-solid-svg-icons',
    },
  },
});
