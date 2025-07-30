// components/Projects.js (Dynamic from GitHub API)
import { useEffect, useState } from 'react';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
      });
  }, []);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-6">GitHub Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {repos.map(repo => (
          <div
            key={repo.id}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{repo.name}</h3>
            <p className="text-sm mb-2">{repo.description}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-sm"
            >
              View Repository ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
