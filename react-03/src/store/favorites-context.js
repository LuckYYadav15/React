import { createContext } from "react";


const FavouritesContext = createContext({
    favorites: [],
    totalfavorites: 0
});

function favoritesContextProvider(props) {
    return <FavouritesContext.Provider>
        {props.children}
    </FavouritesContext.Provider>
}