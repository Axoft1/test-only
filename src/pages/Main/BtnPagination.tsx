import styles from "./Main.module.scss";
import { IEventByYear } from "../../types/IEventByYear";

interface BtnPaginationProps {
  deg: number;
  props: IEventByYear;
  getPage: (n: number) => void;
  active: boolean;
}

const BtnPagination = ({
  deg,
  props,
  getPage,
  active,
}: BtnPaginationProps): JSX.Element => {
  function removeNumberAndgetPage(): void {
    getPage(props.id);
  }

  return (
    <div className={styles.inRound} style={{ transform: `rotate(${deg}deg)` }}>
      <button
        style={{ transform: `rotate(-${deg}deg)` }}
        className={active ? `${styles.dot} ${styles.active}` : `${styles.dot}`}
        onClick={(): void => removeNumberAndgetPage()}
      >
        <a className={styles.number}>{props.id}</a>
        <span className={styles.name}>{props.name}</span>
      </button>
    </div>
  );
};

export default BtnPagination;
