import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/qr_generator/', // Reemplaza <nombre-del-repositorio> con el nombre de tu repositorio
});