import React from 'react'
import style from "./author.module.css"

type Props = {
    author: string 
    genre: string
    setAuthor: React.Dispatch<React.SetStateAction<string>>
}

export default function Author({author, genre, setAuthor}: Props) {
  return (
    <div className={style.wrapper}>
        <button className={style.authorName} onClick={()=>setAuthor(author)}>
          {author ? author : 
          <span className={style.authorSkeleton}/>}
        </button>
        {genre && <div className={style.genre}>
          <span className={style.title}>Genre:</span> {genre}
        </div>}
    </div>
  )
}