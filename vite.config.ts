import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });


export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // or 'localhost', or your custom IP
    port: 3000         // change port (default 5173)
  }
})
