// components/Skills.js
export default function Skills() {
  const skills = [
    "Excel Pro", "Python", "SQL", "Machine Learning", "NLP", "Pandas", "NumPy",
    "Scikit-learn", "OpenCV", "Streamlit", "Tableau", "EDA", "Feature Engineering",
    "Model Evaluation", "Data Visualization", "Regression", "Classification", "Clustering",
    "Netlify", "Vercel", "Render", "Deployment", "Git", "GitHub"
  ];

  const tags = ["Data Science", "Computer Vision", "NLP", "Analytics", "Full-Stack AI", "ML Ops"];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">#{tag}</span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <span key={skill} className="bg-yellow-300 text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition">{skill}</span>
        ))}
      </div>
    </section>
  );
}

