import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './components/pages/AllMeetups';
import NewMeetupPage from './components/pages/NewMeetup';
import FavouritesPage from './components/pages/Favourites';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/'>
          <AllMeetupsPage />
        </Route>

        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>

        <Route path='/favourites'>
          <FavouritesPage />
        </Route>
      </Switch>
    </div>

  );
}

export default App;

//npm install react-router-dom@5.3.0