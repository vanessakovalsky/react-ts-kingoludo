import * as actionsTypes from './actionTypes'

import axiosInstance from "../http-common";


export function addGame(game: Game){
    const action: GameAction = {
        type : actionsTypes.ADD_GAME,
        values: game
    }
    return postDataGame(action);
}

export function removeGame(game: Game) {
    const action: GameAction = {
      type: actionsTypes.REMOVE_GAME,
      values: game,
    }
    return postDataGame(action)
  }

export function postDataGame(action: GameAction) {
    switch(action.type) {
    case 'ADD_GAME':
        axiosInstance.post('/jeux', {
            id: action.values.id,
            categorie: action.values.categorie,
            nomDuJeu: action.values.nomDuJeu,
            editeur: action.values.editeur,
            anneeDeSortie: action.values.anneeDeSortie
        })
        .then(function (response) {
            return (dispatch: DispatchType) => {
                setTimeout(() => {
                  dispatch(action)
                }, 5)
              }
        })
        .catch(function (error) {
            console.log(error)
        })
        break;
    case 'REMOVE_GAME':
        console.log('supprime');
        break;
    }
}