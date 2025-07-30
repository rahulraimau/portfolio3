export default function Projects() {
  const projects = [
    {
      name: "Zomato Rating Prediction",
      link: "https://github.com/rahulraimau/Zomato-Restaurant-Rating-Prediction"
    },
    {
      name: "Shopper Spectrum",
      link: "https://github.com/rahulraimau/Shopper-Spectrum"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-12 px-6">
      <h2 className="text-4xl text-center font-bold mb-8">Projects</h2>
      <div className="grid gap-6 max-w-3xl mx-auto">
        {projects.map((project) => (
          <div key={project.name} className="bg-white p-6 rounded shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <a href={project.link} target="_blank" className="text-blue-600 underline mt-2 inline-block">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
