import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(),
    createSvgIconsPlugin({
      // 指定 SVG图标 保存的文件夹路径
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定 使用svg图标的格式
      symbolId: 'icon-[dir]-[name]',
      // 指定要生成的组件名称
      // svgsDir: 'src/svgs',
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled:true
      }
    }
  }
})
