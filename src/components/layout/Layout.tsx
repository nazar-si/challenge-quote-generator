import React from 'react'
import style from "./layout.module.css"

type Props = {
    children?: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <div className={style.wrapper}>
        <header className={style.header}>
          Header
        </header>
        <main className={style.main}>
          {children}
        </main>
        <footer className={style.footer}>
          Footer
        </footer>
    </div>
  )
}