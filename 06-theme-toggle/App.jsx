import { useState } from 'react';

export default function App() {
  const [dark, setDark] = useState(false);

  const styles = {
    minHeight: '100vh',
    padding: '2rem',
    background: dark ? '#111827' : '#f9fafb',
    color: dark ? '#f9fafb' : '#111827',
  };

  return (
    <main style={styles}>
      <h1>{dark ? 'Dark Mode' : 'Light Mode'}</h1>
      <p>This example shows simple conditional styling with React state.</p>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </main>
  );
}
