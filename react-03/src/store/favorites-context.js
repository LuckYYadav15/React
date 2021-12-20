import { createContext, useState } from "react";


const FavouritesContext = createContext({
    favorites: [],
    totalfavorites: 0
});

function favoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    const context = {
        favorites: userFavorites,
        totalfavorites: userFavorites.length,
    };

    return (<FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>);
}