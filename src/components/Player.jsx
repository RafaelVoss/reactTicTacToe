import { useState } from 'react';

export default function player({initialName, symbol, isActive, onChangeName}) {
  const [ playerName, setPlayerName] = useState( initialName );
  const [ isEditing, setIsEditing ] = useState(false);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if(isEditing) onChangeName(symbol, playerName);
  }

    return (
      <li className={isActive ? 'active' : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    )
}