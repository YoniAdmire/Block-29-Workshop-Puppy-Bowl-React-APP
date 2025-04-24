const COHORT = "2803-PUPPIES";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

export async function fetchAllPlayers() {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.data.players;
}

export async function fetchPlayerById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();
  return data.data.player;
}

export async function createPlayer(playerObj) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(playerObj),
  });
  const data = await res.json();
  return data.data?.newPlayer || null;
}

export async function deletePlayer(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data.success;
}
