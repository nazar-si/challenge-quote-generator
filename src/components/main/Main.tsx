import { useEffect, useState } from "react";
import style from "./main.module.css"
import Quote from "../quote/Quote";
import { Effect } from "effect";
import axios from "axios";
import { getQuotesQuery, getRandomQuotesQuery } from "../../domain/query";
import { IQuoteResponse } from "../../domain/types";

export default function Main() {
  const [author, ] = useState("");
  const [data, setData] = useState<null | IQuoteResponse>(null); 
  
  useEffect(()=>{
    const getResponse = Effect.tryPromise({
      try: async ()=>{
        if (author) {
          const res = await axios(getQuotesQuery({author}))
          setData(res.data as IQuoteResponse);
          return 
        }
        const res = await axios(getRandomQuotesQuery({author}))
        setData(res.data as IQuoteResponse);
        return
      },
      catch: (err) => new Error(`${err}`)
    });
    Effect.runPromise(getResponse);
  }, [author])

  return (
    <div className={style.wrapper}>
      {
        !author && 
        <div className={style.centerWrapper}>
          <main>
            <Quote quote={data ? data.data[0] : data }/>
            {/* <Quote quote={null}/> */}
          </main>
          <footer>
            {data && data.data[0].quoteAuthor}
          </footer>
        </div>
      }
    </div>
  )
}