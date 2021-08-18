import React, { useState } from 'react';

import GameItem from './gameItem';

import axiosInstance from '../http-common';

import { useSelector, shallowEqual, useDispatch } from "react-redux"

const GameList = () => {
    const [games,setGames] = useState<Game[]>([]);;
    React.useEffect(() => {
        axiosInstance.get<Game[]>('/jeux')
            .then(response => {
                setGames(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(() => {
                console.log(games)
            });

        }, []);

        console.log(games)
    
    const games2: readonly Game[] = useSelector(
            (state: Games) => state.list,
            shallowEqual
          )

      return (
        <div>
            {games2.map((game: Game) =>(
                <GameItem game={game} key={game.id} />
            ))}
        </div>
      )
}

export default GameList