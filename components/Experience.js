// components/Experience.js
export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="max-w-3xl mx-auto text-left space-y-8">
        <div>
          <p className="mb-2 font-semibold">Maintenance Engineer – HSIL Ltd.</p>
          <ul className="list-disc pl-6 text-sm">
            <li>Reduced downtime by 15% through root cause analysis.</li>
            <li>Led maintenance data interpretation and reliability improvements.</li>
          </ul>
        </div>
        <div>
          <p className="mb-2 font-semibold">Internships – Data Science & AI Roles</p>
          <ul className="list-disc pl-6 text-sm">
            <li><strong>Innovate Clouds:</strong> Built customer analytics dashboards using Python & Streamlit</li>
            <li><strong>Geminimet:</strong> NLP-based resume classifier and job recommender</li>
            <li><strong>Labmentix:</strong> Automated Excel data analysis pipeline for hospital data</li>
            <li><strong>Null Classes:</strong> Trained and deployed machine learning models using Scikit-learn</li>
            <li><strong>Unified Mentor:</strong> Developed NLP models for chatbot support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
