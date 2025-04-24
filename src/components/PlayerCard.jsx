import { Link } from 'react-router-dom';
import { deletePlayer } from '../api/players';

export default function PlayerCard({ player }) {
  const handleDelete = async () => {
    await deletePlayer(player.id);
    alert('Player deleted. Refresh the list.');
  };

  return (
    <div className="card">
      <h3>{player.name}</h3>
      <img src={player.imageUrl} alt={player.name} />
      <Link to={`/players/${player.id}`}>See Details</Link>
      {player.createdByUser && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}
