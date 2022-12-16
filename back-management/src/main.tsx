import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化一般放在最前面
import 'reset-css'
// UI 框架的样式

//全局的样式
import '@/assets/style/global.scss'
// 组件的样式
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
