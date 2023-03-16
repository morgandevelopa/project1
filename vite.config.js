const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        authenticate: './authenticate.html',
        // List all files you want in your build
      }
    }
  }
})