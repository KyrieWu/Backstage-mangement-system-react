import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 配置 Antd Design 样式自动按需引入
//import styleImport, { AntdResolve } from 'vite-plugin-style-import'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // // 配置antd
    // styleImport({
    //   resolves: [
    //     AntdResolve()
    //   ]
    // })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
