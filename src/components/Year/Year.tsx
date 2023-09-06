import React, { useCallback, useEffect, useState } from "react";

interface YearProps {
  actualYear: number;
}

const Year = ({ actualYear }: YearProps):JSX.Element => {
  const [year, setYear] = useState(actualYear);
  const time = 300 / Math.abs(actualYear - year);

  const run = useCallback((): void => {
    if (year < actualYear) {
      return setYear((y): number => y + 1);
    }
    if (year > actualYear) {
      return setYear((y): number => y - 1);
    }
  }, [actualYear, year]);


  useEffect((): () => void => {
    const inter = setInterval(():void => run(), time);
    if (year === actualYear) {
      clearInterval(inter);
    }
    return (): void => clearInterval(inter);
  }, [actualYear, run, time, year]);

  return <div>{year}</div>;
};

export default Year;
