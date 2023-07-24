import React from 'react'
import style from "./layout.module.css"
import IconGithub from './IconGithub'

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
          <p className={style.footerP}>
            Created by{" "}
            <a
              href="https://github.com/nazar-si/"
              target="_blank"
            >
              Nazar Si
            </a>
            {/* copyright symbol */ ' '}&copy; {new Date().getFullYear()}
          </p>
          <p className={style.footerP}>
            <a
              aria-label="github link"
              href="https://github.com/nazar-si/challenge-quote-generator/"
              target="_blank"
            >
              Find project on {" "}
              <IconGithub/>
            </a>
          </p>
          <p className={style.footerP}>
            API provided by{" "}
            <a
              href="https://github.com/pprathameshmore/QuoteGarden"
              target="_blank"
            >
              Prathamesh More
            </a>
          </p>
        </footer>
    </div>
  )
}