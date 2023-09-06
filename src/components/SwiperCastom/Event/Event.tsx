import styles from "./Event.module.scss";
import { IEvents } from "../../../types/IEventByYear";

interface EventProps {
  props: IEvents;
}

const Event = ({ props }: EventProps): JSX.Element => {
  return (
    <div className={styles.event}>
      <div className={styles.year}>{props.year}</div>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
};

export default Event;
