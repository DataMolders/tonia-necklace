import React, { useEffect, useState } from "react";
import styles from "./Detail.module.scss";
import Image from "next/image";
import ImageDetail from "../ImageDetails/ImageDetail";
import { useLanguage } from "@/hooks/LanguageContext";

function Detail(props: any) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const { currentLanguage, handleEngClick, handleFrClick } = useLanguage();
  const { showComponent, data, increaseIndex, decreaseIndex, index, listLength } = props;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [data])


  const openImage = () => {
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  const handleClose = () => {
    showComponent()
  };

  return (
    <div id="top">
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <button className={styles.closeButton} onClick={handleClose}></button>
          <div className={styles.hiddenName}>{data.title}</div>
          <div className={styles.imageBlock}>
            <button className={styles.image} onClick={openImage}>
              <Image width={500} height={200} src={data.image} alt="image" />
            </button>
            <div className={styles.descriptionBox}>
              <div className={styles.name}>{data.title}</div>
              <div className={styles.description}>{currentLanguage === 'ENG' ? data.eng : data.fr}</div>
              <div className={styles.copyright}>© {data.copyright}</div>
            </div>
          </div>
          <button
            className={`${styles.navButton} ${styles.previousButton}`} onClick={decreaseIndex}>
            <div className={styles.nextButton}>&raquo;</div>
          </button>
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={increaseIndex}>
            <div className={styles.nextButton}>&raquo;</div>
          </button>
        </div>
      </div>

      {isImageOpen && (
        <div className="modal-container">
          <ImageDetail onClose={closeImage} image={data.image} />
        </div>
      )}
    </div>
  );
}

export default Detail;
