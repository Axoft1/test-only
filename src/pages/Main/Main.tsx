import { FC, useRef, useState } from "react";
import styles from "./Main.module.scss";
import { IEventByYear } from "../../types/IEventByYear";

import Year from "../../components/Year/Year";
import SwiperCastom from "../../components/SwiperCastom/SwiperCastom";
import Button from "../../components/Button/Button";

interface MainProps {
  eventsByYear: IEventByYear[];
}

const Main: FC<MainProps> = ({ eventsByYear }): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const nodeRef = useRef<HTMLDivElement>(null);
  const lengthEvent = eventsByYear.length;

  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <h1 className={styles.title}>
          Исторические <br /> даты
        </h1>
        <div className={styles.bodyPagination}>
          <div className={styles.year}>
            <Year actualYear={eventsByYear[page - 1].beginningYear} />
            <Year actualYear={eventsByYear[page - 1].endingYear} />
          </div>
          <div className={styles.roundPagination}>
            <div className={styles.roundPaginationCircle}>
              {eventsByYear.map((e: IEventByYear, i) => (
                <div
                  key={i}
                  className={styles.inRound}
                  style={
                    {
                      "--deg": `${(i - page) * (360 / lengthEvent)}deg`,
                    } as React.CSSProperties
                  }
                >
                  <button
                    onClick={() => {
                      setPage(i + 1);
                    }}
                    className={
                      page === i + 1
                        ? `${styles.dot} ${styles.active}`
                        : `${styles.dot}`
                    }
                  >
                    <a className={styles.number}>{e.id}</a>
                    <span className={styles.name}>{e.name}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pages}>
        <div>
          <div className={styles.pagesCount}>
            {page < 10 ? `0${page}` : page}/
            {lengthEvent < 10 ? `0${lengthEvent}` : lengthEvent}
          </div>
          <div className={styles.btns}>
            <Button
              direction="prev"
              page={page}
              getPage={setPage}
              length={lengthEvent}
            />
            <Button
              direction="next"
              page={page}
              getPage={setPage}
              length={lengthEvent}
            />
          </div>
        </div>
        <div className={styles.pagination}>
          {eventsByYear.map((e, i) =>{
            let currentPage = i +1
            return (
              <button
                key={e.id}
                disabled={page === currentPage}
                className={page === currentPage ? styles.active : ""}
                onClick={() => setPage(currentPage)}
              ></button>
            );})}
        </div>
      </div>
      <div className={styles.wrapper}>
        {eventsByYear[page - 1] && (
          <div ref={nodeRef}>
            <SwiperCastom event={eventsByYear[page - 1].events} page={page} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
