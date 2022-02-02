import React from 'react';

import axiosInstance from './http-common';

function useAPIGameList(){
    const [games,setGames] = React.useState<Game[]>([]);
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
            });

        }, []);
    return games;
}

export default useAPIGameList