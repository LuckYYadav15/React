import { createContext, useState } from "react";


const FavouritesContext = createContext({
    favorites: [],
    totalfavorites: 0
});

function favoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id != meetupId);
        });
     }

    function itemIsFavoriteHandler() { }

    const context = {
        favorites: userFavorites,
        totalfavorites: userFavorites.length,
    };

    return (<FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>);
}