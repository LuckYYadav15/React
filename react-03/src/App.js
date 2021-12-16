import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './components/pages/AllMeetups';
import NewMeetupPage from './components/pages/NewMeetup';
import FavoritesPage from './components/pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>

        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>

        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//npm install react-router-dom@5.2.0