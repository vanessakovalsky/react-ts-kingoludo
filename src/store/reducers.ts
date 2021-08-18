import * as actionTypes from "./actionTypes";

const initialState: Games = {
    list: [
        {
            id: 1,
            nomDuJeu: "Nom du jeu", 
            editeur: "Days of wonders", 
            anneeDeSortie: 2004 , 
            categorie: "Familiale"
          },
          {
            id: 2,
            nomDuJeu: "7 wonders", 
            editeur: "Repos production", 
            anneeDeSortie: 2010 , 
            categorie: "Familiale" 
          }
    ]
}

const reducer = (
    state: Games = initialState,
    action: GameAction 
    ) : Games => {
        switch(action.type) {
            case actionTypes.ADD_GAME:
                const newGame: Game = {
                    id: Math.random(), // not really unique
                    nomDuJeu: action.values.nomDuJeu,
                    editeur: action.values.editeur,
                    anneeDeSortie: action.values.anneeDeSortie,
                    categorie: action.values.categorie, 
                }
                return {
                    ...state,
                    list: state.list.concat(newGame),
                }
                case actionTypes.REMOVE_GAME:
                    const updatedGames: Game[] = state.list.filter(
                    game => game.id !== action.values.id
                    )
                    return {
                    ...state,
                    list: updatedGames,
                    }
                }
                return state
}

export default reducer;