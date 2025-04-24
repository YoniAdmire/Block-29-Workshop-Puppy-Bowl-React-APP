export default function SearchBar({ query, setQuery }) {
    return (
      <input
        type="text"
        placeholder="Search players..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    );
  }
  