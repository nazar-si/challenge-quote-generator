import { IconQuote } from "@tabler/icons-react";
import type { Quote } from "../../domain/types";
import style from "./quote.module.css";
import Balancer from "react-wrap-balancer";

type Props = {
  quote: Partial<Quote> | null;
  genre?: boolean 
};

export default function Quote(props: Props) {
  return (
    <div className={style.wrapper}>
      <div className={style.quoteText}>
        <Balancer>
          <span className={style.icon}>
            <IconQuote fill="currentColor" size={48}/>
            {props.genre && <span>Genre: {props.quote?.quoteGenre}</span>}
          </span>
          {props.quote ? props.quote.quoteText : <LoadingState />}
        </Balancer>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <>
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <span key={i} className={style.skelet} style={{
            width: `${50}vw`
          }} />
        ))}
    </>
  );
}
