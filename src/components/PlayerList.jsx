// ✅ CORRECT
export default function PlayerList({ players }) {
    return (
      <div className="player-list">
        {players.map((player) => (
          <div key={player.id}>
            <h3>{player.name}</h3>
          </div>
        ))}
      </div>
    );
  }
  