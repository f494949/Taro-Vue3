import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgIcons from 'vite-plugin-svg-icons'
import path from 'path'

export default defineConfig({
  plugins: [
    svgIcons({
      // 指定 SVG图标 保存的文件夹路径
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定 使用svg图标的格式
      symbolId: 'icon-[dir]-[name]',
      // 指定要生成的组件名称
      // svgsDir: 'src/svgs',
    }),
  ],
})

作者：树懒的梦想
链接：https://juejin.cn/post/7236270798465744953
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
