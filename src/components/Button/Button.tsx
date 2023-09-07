import styles from "./Button.module.scss";

interface ButtonProps {
  page?: number;
  getPage?: (n: number) => void;
  direction: "next" | "prev";
  length?: number;
}

const Button = ({
  page,
  getPage,
  direction,
  length,
}: ButtonProps): JSX.Element => {
  
  return (
    <>
      {direction === "prev" ? (
        <button
          disabled={page === 1}
          className={styles.buttonDecrement}
          onClick={(): void => getPage(page - 1)}
        ></button>
      ) : (
        <button
          disabled={page === length}
          className={styles.buttonIncrement}
          onClick={(): void => getPage(page + 1)}
        ></button>
      )}
    </>
  );
};

export default Button;
