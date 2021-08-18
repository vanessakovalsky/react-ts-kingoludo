import React from "react";

interface Props {
    name:string;
    level?: number;
    language?: string;
}

const WelcomeComponent = (props: Props) => {

    const [lastname, setLastname] = React.useState("David");

    function updateLastName(evenement: React.ChangeEvent<HTMLInputElement>) {
        setLastname(evenement.target.value)
    }

    return (
        <div>
            <h2>Bienvenue prenom: {props.name} nom: {lastname} niveau:{props.level}</h2>
            <input onChange={updateLastName} />
        </div>
    )
}

export default WelcomeComponent;