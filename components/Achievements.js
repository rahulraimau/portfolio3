// components/Achievements.js
export default function Achievements() {
  const achievements = [
    "Completed Data Science 360 Program from AnalytixLabs",
    "Built 10+ ML/NLP Projects deployed on GitHub",
    "Top performer in Null Classes Capstone Challenge",
    "Automated EDA workflows using Python + Streamlit",
    "Recognized mentor at Unified AI Mentor Program",
    "Participated in Kaggle Competitions including Titanic, House Prices, and NLP challenges",
    "Created interactive charts (histograms, correlation heatmaps, dashboards) using Python and Streamlit"
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-white text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6">Achievements</h2>
      <ul className="max-w-3xl mx-auto space-y-4 list-disc list-inside text-left">
        {achievements.map((item, idx) => (
          <li key={idx} className="text-lg">{item}</li>
        ))}
      </ul>
    </section>
  );
}
