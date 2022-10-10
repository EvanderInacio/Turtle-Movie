import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Series } from "./pages/Series/Series";
import { Persons } from "./pages/Persons/Persons";
import { Detail } from "./pages/Detail/Detail";
import { Person } from "./pages/Persons/Person";
import { Footer } from "./components/Footer";
import { Search } from "./pages/Search/Search";
import { Upcoming } from "./pages/Upcoming/Upcoming";
import { Favorites } from "./pages/Favorites";

import GlobalStyle from "./styles/global";
import { FavoriteProvider } from "./hooks/FavoriteContext";

function App() {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/persons" element={<Persons />} />
          <Route path="/search" element={<Search />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/detail/:type/:id" element={<Detail />} />
          <Route path="/person/:id" element={<Person />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FavoriteProvider>
  );
}

export default App;
