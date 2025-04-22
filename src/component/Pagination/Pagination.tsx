import { useTheme } from '../../context/ThemeContext';
import { IPaginationProps } from '../../interfaces';

import styles from './styles.module.css';

const Pagination = ({
  handlePageNumber,
  handlePrevPage,
  handleNextPage,
  totalPages,
  currentPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();

  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
      <button disabled={currentPage <= 1} className={styles.arrow} onClick={handlePrevPage}>
        &lt;
      </button>
      <div className={styles.list}>
        {[...new Array(totalPages)].map((_, index) => (
          <button
            key={index}
            disabled={index + 1 === currentPage}
            className={styles.pageNumber}
            onClick={() => handlePageNumber(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage >= totalPages}
        className={styles.arrow}
        onClick={handleNextPage}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
