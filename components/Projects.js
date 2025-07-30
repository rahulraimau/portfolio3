// components/Projects.js
export default function Projects() {
  const projects = [
    {
      title: "Zomato Restaurant Rating Prediction",
      link: "https://github.com/rahulraimau/Zomato-Restaurant-Rating-Prediction",
      description: "NLP project predicting restaurant ratings using customer reviews."
    },
    {
      title: "Shopper Spectrum",
      link: "https://github.com/rahulraimau/Shopper-Spectrum",
      description: "Customer segmentation and product recommendation system."
    },
    {
      title: "Electricity Demand Forecasting",
      link: "https://github.com/rahulraimau",
      description: "Time series analysis using ARIMA and Prophet for demand prediction."
    },
    {
      title: "Credit Card Fraud Detection",
      link: "https://github.com/rahulraimau",
      description: "XGBoost + SMOTE with 94% ROC-AUC score."
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6 bg-white text-gray-800 text-center overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 z-10 relative">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto z-10 relative">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:bg-opacity-80"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm mb-3">{proj.description}</p>
            <a href={proj.link} className="text-blue-600 underline" target="_blank">View Project ↗</a>
          </div>
        ))}
      </div>
    </section>
  );
}
