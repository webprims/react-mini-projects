import { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setMessage('Please fill in both fields.');
      return;
    }
    setMessage(`Thanks, ${form.name}! Your form is ready.`);
  };

  return (
    <main>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={updateField} placeholder="Name" />
        <input name="email" value={form.email} onChange={updateField} placeholder="Email" type="email" />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}
