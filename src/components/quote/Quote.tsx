import { IconQuote } from "@tabler/icons-react";
import type { IQuoteResponse, Quote } from "../../domain/types";
import style from "./quote.module.css";
import React from "react";
import { getRandomQuotesQuery } from "../../domain/query";
import axios from "axios";
import Balancer from "react-wrap-balancer"

type Props = {
  quote: Partial<Quote>;
};

export default function Quote(props: Props) {
  const [quote, setQuote] = React.useState("");

  React.useEffect(() => {
    const getData = async ()=>{
      const res = await axios(getRandomQuotesQuery());
      setQuote(res.data.data[0].quoteText)
    };
    getData();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.quoteText}>
        <Balancer>
          <span className={style.icon}>
            <IconQuote fill="currentColor" size={48} />
          </span>
          {quote?quote:"Loading..."}
        </Balancer>
      </div>
    </div>
  );
}
