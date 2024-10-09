import Searchinput from "../eventos/searchinput";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./animes.module.css";
function Manga(){
const [text, setText] = useState("");
  const api = "https://kitsu.io/api/edge/";
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchManga = (query) => {
      const url = query
        ? `${api}manga?filter[text]=${query}&page[limit]=12`
        : `${api}manga?page[limit]=20&sort=popularityRank`; 
      
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

    fetchManga(text);
  }, [text]);
  const handleImageClicks = (manga) => {
    navigate("/mangaInfo", { state: manga });
  };
    return(<div className={styles.div}>
        <div className={styles.search}>
          <Searchinput value={text} onChange={(str) => setText(str)} />
        </div>
  
        {info && info.data && (
          <ul className={styles.Anime_list}>
            {info.data.map((manga) => (
              <li key={manga.id} onClick={() => handleImageClicks(manga)}>
                <img
                  src={manga.attributes.posterImage.small}
                  alt={manga.attributes.canonicalTitle}
                />
                {manga.attributes.canonicalTitle}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}
export default Manga;