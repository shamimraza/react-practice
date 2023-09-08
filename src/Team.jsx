import { useState } from "react";


const teamStyle = {
    border: '2px solid red',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px'
}

const Team = () => {
    const [team, setTeam] = useState(11)

    const addButton = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const removeButton = () => {
        const newButton = team - 1;
        setTeam(newButton)
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addButton}>add</button>
            <button onClick={removeButton}>Remove</button>
        </div>
    );
};

export default Team;