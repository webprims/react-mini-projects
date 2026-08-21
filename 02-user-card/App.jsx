function UserCard({ name, role, city }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
      <small>{city}</small>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <h1>Reusable User Cards</h1>
      <UserCard name="Aman" role="Frontend Learner" city="Amritsar" />
      <UserCard name="Simran" role="Python Learner" city="Jalandhar" />
    </main>
  );
}
