import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchAllPlayers, fetchPlayerById } from './api/players';
import PlayerList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';
import CreatePlayerForm from './components/CreatePlayerForm';
import SearchBar from './components/SearchBar';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadPlayers = async () => {
      const allPlayers = await fetchAllPlayers();
      setPlayers(allPlayers);
    };
    loadPlayers();
  }, []);

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      <CreatePlayerForm setPlayers={setPlayers} />
      <Routes>
        <Route path="/" element={<PlayerList players={filteredPlayers} />} />
        <Route path="/players/:id" element={<PlayerDetails />} />
      </Routes>
    </div>
  );
}
