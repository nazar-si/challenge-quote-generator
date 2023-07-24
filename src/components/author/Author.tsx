import React from 'react'
import style from "./author.module.css"

type Props = {
    author: string 
    setAuthor: React.Dispatch<React.SetStateAction<string>>
}

export default function Author({author}: Props) {
  return (
    <div>
        {author}
    </div>
  )
}