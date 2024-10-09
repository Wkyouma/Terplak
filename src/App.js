import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/pages/Home'
import Animes from './componentes/pages/animes.js'
import Manga from './componentes/pages/manga.js'
import Contact from './componentes/pages/Contact'
import Container from './componentes/layout/container.js'
import Navbar from './componentes/layout/navbar.js';
import AnimeInfo from './componentes/pages/animeInfo.js'; 
import Footer from './componentes/layout/footer.js';
import MangaInfo from './componentes/pages/mangaInfo.js'


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/animeInfo" element={<AnimeInfo />} />
          <Route path="/mangaInfo" element={<MangaInfo />} />
        </Routes>
        </Container>
        <Footer />
      </Router>
    
  );
}

export default App;