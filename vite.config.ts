// Simplified Vite config for development
export default {
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build'
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
}
