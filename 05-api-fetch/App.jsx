import { useEffect, useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) throw new Error('Could not load users');
        return response.json();
      })
      .then((data) => setUsers(data.slice(0, 5)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>API Users</h1>
      {users.map((user) => (
        <article key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </article>
      ))}
    </main>
  );
}
