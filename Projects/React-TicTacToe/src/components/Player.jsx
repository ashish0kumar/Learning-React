import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(Editing => !Editing);
        
        if (isEditing) onChangeName(symbol, playerName);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let EditablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) EditablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;

    return (
        <li className={isActive ? "active" : ""}>
            <span className="player">
                {EditablePlayerName}
                <span id="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}