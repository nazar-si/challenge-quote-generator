import React from 'react'
import style from "./scroller.module.css"

type Props = React.HTMLProps<HTMLDivElement>

export default function Scroller(props: Props) {
  return (
    <div {...props} className={`${props.className} ${style.main}`}></div>
  )
}