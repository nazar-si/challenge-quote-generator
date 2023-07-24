import React, { useEffect } from "react";
import style from "./pagination.module.css";
import { usePagination } from "@mantine/hooks";
import {
  IconChevronLeft,
  IconChevronRight,
  IconDots,
} from "@tabler/icons-react";

type Props = {
  value: number;
  maxValue: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({ value, setValue, maxValue }: Props) {
  function incrementValue() {
    if (value !== 0) setValue((v) => v - 1);
  }
  function decrementValue() {
    if (value !== maxValue) setValue((v) => v + 1);
  }

  const pagination = usePagination({
    total: maxValue,
    initialPage: value,
  });

  useEffect(() => {
    pagination.setPage(value);
  }, [value, maxValue]);

  return (
    <div className={style.wrapper}>
      <button onClick={incrementValue}>
        <IconChevronLeft />
      </button>
      {pagination.range.map((r) =>
        r === "dots" ? (
          <div>
            <IconDots size={16} />
          </div>
        ) : (
          <button key={r} className={r === value ? style.selected : ""} onClick={()=>setValue(r)}>
            {r}
          </button>
        )
      )}
      <button onClick={decrementValue}>
        <IconChevronRight />
      </button>
    </div>
  );
}
