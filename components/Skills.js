export default function Skills() {
  const skills = ["Python", "Pandas", "Scikit-learn", "SQL", "React", "Tailwind CSS", "Tableau", "Git"];

  return (
    <section id="skills" className="min-h-screen bg-white text-gray-800 py-12 px-6">
      <h2 className="text-4xl text-center font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill} className="bg-gray-100 text-center py-4 rounded shadow hover:bg-yellow-100">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
