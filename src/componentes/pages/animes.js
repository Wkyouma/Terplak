import Searchinput from "../eventos/searchinput";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./animes.module.css";

function NewProject() {
  const [text, setText] = useState("");
  const api = "https://kitsu.io/api/edge/";
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchAnime = (query) => {
      const url = query
        ? `${api}anime?filter[text]=${query}&page[limit]=12`
        : `${api}anime?page[limit]=20&sort=popularityRank`; 
      
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setInfo(data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados:", error);
        });
    };

    fetchAnime(text);
  }, [text]);

  const handleImageClicks = (anime) => {
    navigate("/AnimeInfo", { state: anime });
  };

  return (
    <div className={styles.div}>
      <div className={styles.search}>
        <Searchinput value={text} onChange={(str) => setText(str)} />
      </div>

      {info && info.data && (
        <ul className={styles.Anime_list}>
          {info.data.map((anime) => (
            <li key={anime.id} onClick={() => handleImageClicks(anime)}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NewProject;
