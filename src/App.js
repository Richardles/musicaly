import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DetailPage from "./pages/detail page/DetailPage";
import FavouritesPage from "./pages/favourites page/FavouritesPage";
import SearchPage from "./pages/search page/SearchPage";

function App() {
  // localStorage.clear()
  return (
    <Router>
      <Link to="/favourites">
        Favorite Page
      </Link>
      <Link to="/">
        Home
      </Link>
      <Switch>
        <Route path="/detail/:albumId">
          <DetailPage/>
        </Route>
        <Route path="/favourites">
          <FavouritesPage/>
        </Route>
        <Route path="/">
          <SearchPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
