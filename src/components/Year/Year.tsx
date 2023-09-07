import { useCallback, useEffect, useState } from "react";

interface YearProps {
  actualYear: number;
}

const Year = ({ actualYear }: YearProps):JSX.Element => {
  const [year, setYear] = useState(actualYear);
  const time = 200 / Math.abs(actualYear - year);

  const run = useCallback((): void => {
    if (year < actualYear) {
      return setYear((y): number => y + 1);
    }
    if (year > actualYear) {
      return setYear((y): number => y - 1);
    }
  }, [actualYear, year]);


  useEffect((): () => void => {
    if (year === actualYear) {
      return
    }
    const inter = setInterval(():void => run(), time);
    return (): void => clearInterval(inter);
  }, [actualYear, run, time, year]);

  return <div>{year}</div>;
};

export default Year;
