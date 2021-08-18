import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import GameItem from './gameItem';

import { useSelector, shallowEqual } from "react-redux"
import useAPIGameList from '../apiCall';
import { AppContext } from '../context';
import { addGame } from '../store/actionCreators';

const GameList = () => {

    // Redux way to get data
    // const games: readonly Game[] = useSelector(
    //         (state: Games) => state.list,
    //         shallowEqual
    //       )

    // Custom hook way to get data with API call
    //const games = useAPIGameList();

    //Context / Hook way to get data
    const { state, dispatch } = useContext(AppContext)
    const games = state.list;

      return (
        <div>
            {games.map((game: Game) =>(
                <Link to={'/game/'+game.id}>
                    <GameItem game={game} key={game.id} />
                </Link>
            ))}
        </div>
      )
}

export default GameList