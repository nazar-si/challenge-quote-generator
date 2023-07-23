import React from 'react'
import style from "./layout.module.css"

type Props = {
    children?: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <div className={style.wrapper}>
        <header>
          Header
        </header>
        <main>
          {children}
        </main>
        <footer>
          Footer
        </footer>
    </div>
  )
}