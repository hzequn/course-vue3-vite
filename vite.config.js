import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")
import styleImport from "vite-plugin-style-import"
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
    base: "./",
    publicDir: 'assets',
    build: {
        outDir: 'dist',
        brotliSize:false,// => 启用/禁用brotli压缩大小报告
        //去除console
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger:true
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    server: {
        port: 3000,
        host: "10.0.0.222",
        // https: true,
        open:true,
        proxy: {
            "/ydypf": {
                //要访问的跨域的域名
                target: "http://10.0.0.185:8085",
                /** 是否启用websockets */
                ws: false,
                /** 使用的是http协议则设置为false，https协议则设置为true */
                secure: false, 
                /** 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题 */
                changOrigin: true,
            }
        }
    },
    plugins: [
        vue(),
        // css样式按需加载
        styleImport({
            libs: [
                {
                    libraryName: 'vant',
                    esModule: true,
                    resolveStyle: (name) => {
                      return `vant/es/${name}/style`;
                    },
                },
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    ensureStyleFile: true,
                    resolveStyle: name => {
                        if (name === 'locale') return '';
                        return `element-plus/lib/theme-chalk/${name}.css`;
                    },
                    resolveComponent: name => {
                        return `element-plus/lib/${name}`;
                    }
                }
            ]
        }),
        //开启gzip或brotli来压缩资源
        viteCompression({
            // 开启gzip模式
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz'
        })
    ],
})
