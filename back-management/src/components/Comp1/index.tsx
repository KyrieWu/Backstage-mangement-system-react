import React from 'react'
//import './comp1.scss'

// 模块化引入
import styles from './comp1.module.scss'

export default function Comp1() {
  return (
    <div className={styles.box}>
        <p>这是comp1的内容</p>
    </div>
  )
}
