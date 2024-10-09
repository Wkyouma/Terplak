import React from 'react';
import { useLocation,useNavigate  } from 'react-router-dom';
import styles from './projetos.module.css';
import Button from '../layout/button'


function Projetos() {
  const navigate = useNavigate();
  const location = useLocation();
  const anime = location.state; 

  const handleBackClick = () => {
    navigate('/animes'); 
  };

  return (
    <div className={styles.container}><div className={styles.positionButton}>
      <Button  onClick={handleBackClick}>X</Button>
      </div>
      <img 
        className={styles.image} 
        src={anime.attributes.posterImage.large} 
        alt={anime.attributes.canonicalTitle} 
      />
      <div className={styles.bottom}>
      <div className={styles.textContainer}>
        <h1>{anime.attributes.canonicalTitle}</h1>
        <p>{anime.attributes.synopsis}</p>
      </div>
      <iframe
        className={styles.iframe} 
        src={`https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
      
      <div className={styles.averageContainer}>
        <h4>Release:{anime.attributes.createdAt}</h4>
        <h4>Average:{anime.attributes.averageRating}</h4>
        <h4>episode Length:{anime.attributes.episodeLength}</h4>
    </div>
    

    </div>
  );
}

export default Projetos;