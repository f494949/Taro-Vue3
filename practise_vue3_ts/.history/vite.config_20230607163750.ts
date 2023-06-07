import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { UserConfigExport, ConfigEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({command}:ConfigEnv):UserConfigExport => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定 SVG图标 保存的文件夹路径
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定 使用svg图标的格式
        symbolId: 'icon-[dir]-[name]'
        // 指定要生成的组件名称
        // svgsDir: 'src/svgs',
      }),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
      })
    ],
    //scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    }
  }
})
