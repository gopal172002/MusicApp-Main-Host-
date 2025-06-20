import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    server: {
        port: 5173,
        strictPort: true,
        cors: true,
        host: true
    },
    plugins: [
        react(),
        federation({
            name: 'host-app',
            remotes: {
                musicLibrary: 'https://music-library-chi.vercel.app/assets/remoteEntry.js'
            },
            shared: ['react', 'react-dom', 'react-router-dom', '@mui/material', '@emotion/react', '@emotion/styled']
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                minifyInternalExports: false
            }
        }
    },
    optimizeDeps: {
        include: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled']
    }
}); 