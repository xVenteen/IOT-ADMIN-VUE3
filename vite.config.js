import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import postCssPxToRem from 'postcss-pxtorem'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolve: [VantResolve()],
    })
  ],
  // Vite自身已经集成PostCSS，无需再次安装。另外也无需单独创建PostCSS配置文件，已集成到vite.config.js的css选项中
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ['*']
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')// 设置 `@` 指向 `src` 目录
    }
  },
  base: './',// 设置打包路径
  server: {
    port: 4000,// 设置服务启动端口号
    open: true,// 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  },
  // 设置代理，根据我们项目实际情况配置,本项目没必要
  // proxy: {
  //   '/api': {
  //     target: 'http://xxx.xxx.xxx.xxx:8000',
  //     changeOrigin: true,
  //     secure: false,
  //     rewrite: (path) => path.replace('/api/', '/')
  //   }
  // }
})
