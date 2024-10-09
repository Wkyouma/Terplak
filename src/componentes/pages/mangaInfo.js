import React from 'react';
import { useLocation,useNavigate  } from 'react-router-dom';
import styles from './projetos.module.css';
import Button from '../layout/button'
import styless from '../pages/mangaInfo.module.css'


function Projetos() {
  const navigate = useNavigate();
  const location = useLocation();
  const manga = location.state; // Recebendo os dados passados na navegação

  const handleBackClick = () => {
    navigate('/manga');
  };

  return (
    <div className={styles.container}><div className={styles.positionButton}>
      <Button  onClick={handleBackClick}>X</Button>
      </div>
      <img 
        className={styles.image} 
        src={manga.attributes.posterImage.large} 
        alt={manga.attributes.canonicalTitle} 
      />
      <div className={styles.bottom}>
      <div className={styles.textContainer}>
        <h1>{manga.attributes.canonicalTitle}</h1>
        <p>{manga.attributes.synopsis}</p>
      </div>
      </div>
      
      <div className={styles.averageContainer}>
        <h4>Release:{manga.attributes.startDate}</h4>
        <h4>finish:{manga.attributes.endDate}</h4>
        <h4>Average:{manga.attributes.averageRating}</h4>
        <h4>charpter Length:{manga.attributes.chapterCount}</h4>
    </div>
    

    </div>
  );
}

export default Projetos;