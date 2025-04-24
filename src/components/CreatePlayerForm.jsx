import { useState } from 'react';
import { createPlayer, fetchAllPlayers } from '../api/players';

export default function CreatePlayerForm({ setPlayers }) {
  const [formData, setFormData] = useState({ name: '', breed: '', imageUrl: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await createPlayer({ ...formData });
    const updatedPlayers = await fetchAllPlayers();
    setPlayers(updatedPlayers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="breed" placeholder="Breed" onChange={handleChange} />
      <input name="imageUrl" placeholder="Image URL" onChange={handleChange} />
      <button type="submit">Add Player</button>
    </form>
  );
}
