import { useMemo, useState } from "react";

const courses = [
  { id: 1, title: "Python Programming", level: "Beginner" },
  { id: 2, title: "Full Stack Web Development", level: "Intermediate" },
  { id: 3, title: "Data Analytics", level: "Beginner" },
  { id: 4, title: "Artificial Intelligence", level: "Intermediate" },
  { id: 5, title: "IoT Smart Systems", level: "Beginner" },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesQuery = course.title
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesLevel = level === "All" || course.level === level;
      return matchesQuery && matchesLevel;
    });
  }, [query, level]);

  return (
    <main style={{ maxWidth: 640, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Course Finder</h1>

      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search courses..."
        style={{ padding: 10, width: "60%", marginRight: 8 }}
      />

      <select
        value={level}
        onChange={(event) => setLevel(event.target.value)}
        style={{ padding: 10 }}
      >
        <option>All</option>
        <option>Beginner</option>
        <option>Intermediate</option>
      </select>

      <p>{filteredCourses.length} course(s) found</p>

      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id} style={{ marginBottom: 10 }}>
            <strong>{course.title}</strong> — {course.level}
          </li>
        ))}
      </ul>
    </main>
  );
}
