import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPlayerById } from '../api/players';

export default function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const getPlayer = async () => {
      const data = await fetchPlayerById(id);
      setPlayer(data);
    };
    getPlayer();
  }, [id]);

  if (!player) return <p>Loading...</p>;

  return (
    <div>
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <p>Team: {player.team?.name}</p>
      <p>Owner: {player.owner}</p>
    </div>
  );
}
