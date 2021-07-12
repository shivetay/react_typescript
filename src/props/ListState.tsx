import React, { useState } from 'react';

const ListState: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h1>Guest list</h1>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add guest</button>
    </div>
  );
};

export default ListState;
