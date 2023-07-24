import { useCallback, useEffect, useState } from "react";
import style from "./main.module.css";
import Quote from "../quote/Quote";
import { Effect } from "effect";
import axios from "axios";
import { getQuotesQuery, getRandomQuotesQuery } from "../../domain/query";
import { IQuoteResponse } from "../../domain/types";
import Author from "../author/Author";
import Pagination from "../pagination/Pagination";
import Scroller from "../scroller/Scroller";
import { IconChevronLeft } from "@tabler/icons-react";

export default function Main() {
  const [author, setAuthor] = useState("");
  const [data, setData] = useState<null | IQuoteResponse>(null);
  const [page, setPage] = useState(1);
  const [pageUpdating, setPageUpdating] = useState(false);

  const authorUpdatedEffect = useCallback((author: string, page: number)=>Effect.tryPromise({
    try: async () => {
      if (author) {
        const res = await axios(getQuotesQuery({ author, limit: 3, page }));
        setData(()=>res.data as IQuoteResponse);
        return;
      }
      const res = await axios(getRandomQuotesQuery({ author }));
      setData(()=>res.data as IQuoteResponse);
      return;
    },
    catch: (err) => new Error(`${err}`),
  }), []);

  const paginationEffect = useCallback((author: string, page: number)=>Effect.tryPromise({
    try: async ()=> {
      if (author){
        const res = await axios(getQuotesQuery({ author, limit: 3, page }));
        setData(()=>res.data as IQuoteResponse)
      }
      setPageUpdating(false);
      return 
    },
    catch: (err)=> new Error(`${err}`)
  }), []);


  useEffect(() => {
    setData(null);
    setPage(1);
    const getResponse = authorUpdatedEffect(author, page);
    Effect.runPromise(getResponse);
  }, [author]);

  useEffect(()=>{
    setPageUpdating(true);
    const getResponse = paginationEffect(author, page);
    Effect.runPromise(getResponse);
  }, [page])

  return (
    <div className={style.wrapper}>
      {!author && (
        <div className={style.centerWrapper}>
          <main>
            <Quote quote={data ? data.data[0] : data} />
            {/* <Quote quote={null}/> */}
          </main>
          <footer>
            <Author
              author={data ? data.data[0].quoteAuthor : ""}
              genre={data ? data.data[0].quoteGenre : ""}
              setAuthor={setAuthor}
            />
          </footer>
        </div>
      )}
      {author && (
        <div className={style.fullWrapper}>
          <main>
            <div className={style.back} onClick={()=>setAuthor('')}>
              <IconChevronLeft size={32}/>
            </div>
            <Scroller>
              {(data && !pageUpdating)
                ? data.data.map((d) => <Quote quote={d} key={d._id} genre={true}/>)
                : Array(3).fill(0).map(()=><Quote quote={null} />)}
            </Scroller>
          </main>
          <footer>
            {data && (
              <Pagination
                value={page}
                setValue={setPage}
                maxValue={data.pagination.totalPages}
              />
            )}
            <Author
              author={author}
              genre=""
              setAuthor={() => {
                setAuthor("");
              }}
            />
          </footer>
        </div>
      )}
    </div>
  );
}
