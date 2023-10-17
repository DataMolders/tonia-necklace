import Link from "next/link";
import styles from "./Exhibtions.module.scss";
import { useState } from 'react';

function Exhibitions() {

  const exhibitions = [
    { exhibition: 'gallerium 2023', place: 'gallerium' },
    { exhibition: 'paris 2022', place: 'paris' },
    { exhibition: 'new orleans 2022', place: 'neworleans' },
    { exhibition: 'sant louis 2021', place: 'stlouis' },
    { exhibition: 'provence 2020', place: 'provence' },
    { exhibition: 'montpellier 2019', place: 'montpellier' },
    { exhibition: 'dakar 2018', place: 'dakar' },
    { exhibition: 'algiers 2017', place: 'algiers' },
  ];

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const firstPageStartIndex = (currentPage - 1) * itemsPerPage;
  const firstPageEndIndex = firstPageStartIndex + itemsPerPage;

  const visibleExhibitions = exhibitions.slice(firstPageStartIndex, firstPageEndIndex);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const isNextButtonVisible = currentPage < Math.ceil(exhibitions.length / itemsPerPage);
  const isPreviousButtonVisible = currentPage > 1;

  return (
    <div className={styles.main}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.title}>EXHIBITIONS</div>
      <div className={styles.box}>
        <div className={styles.row}>
          {visibleExhibitions.map((exhibition, index) => (
            <Link
              key={exhibition.exhibition}
              href={`/information?exhibition=${exhibition.exhibition}&place=${exhibition.place}`}
              className={styles.circle}
            >
              <div className={styles.text}>
                {exhibition.exhibition.toUpperCase()}
              </div>
            </Link>
          ))}
        </div>
        {isPreviousButtonVisible && (
          <button
            onClick={handlePreviousPage}
            className={`${styles.navButton} ${styles.previousButton}`}
          >
            &laquo;
          </button>
        )}
        {isNextButtonVisible && (
          <button
            onClick={handleNextPage}
            className={`${styles.navButton} ${styles.nextButton}`}
          >
            &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default Exhibitions;
