import styles from "./Button.module.scss";

interface ButtonProps {
  page?: number;
  getPage?: (n: number) => void;
  direction: "next" | "prev";
  length?: number;
  setCsst?: (n: boolean) => void;
}

const Button = ({
  page,
  getPage,
  direction,
  length,
}: ButtonProps): JSX.Element => {
  function getPageNumber(page: number): void {
    getPage(page);
    if (page === 0 || page === length + 1) {
      return;
    }
  }
  return (
    <>
      {direction === "prev" ? (
        <button
          disabled={page === 1}
          className={styles.buttonDecrement}
          onClick={(): void => getPageNumber(page - 1)}
        ></button>
      ) : (
        <button
          disabled={page === length}
          className={styles.buttonIncrement}
          onClick={(): void => getPageNumber(page + 1)}
        ></button>
      )}
    </>
  );
};

export default Button;
