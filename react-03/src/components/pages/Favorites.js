import { useContext } from 'react';

import FavouritesContext from '../../store/favorites-context';
import MeetupList from '../meetups/MeetupList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavouritesContext);

    let content;

    if (favoritesCtx.totalfavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    }
    else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }
    return (<section>
        <h1>My Favorites</h1> 
        {content}
    </section>);
}

export default FavoritesPage;