// components/Hero.js
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-800 to-black dark:from-gray-200 dark:to-white text-white dark:text-black p-6 transition-all duration-500 overflow-hidden">
      <svg className="absolute top-0 left-0 w-full h-48 -z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#facc15" fillOpacity="1" d="M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,122.7C672,107,768,117,864,117.3C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>

      <img src="/images/profile.jpg" alt="Rahul Rai" className="w-32 h-32 rounded-full border-4 border-yellow-400 mb-6 animate-bounce hover:scale-110 transition-transform" />
      <h1 className="text-4xl sm:text-6xl font-bold mb-2 animate-fade-in">Hi, I'm Rahul Rai</h1>
      <p className="text-lg sm:text-2xl max-w-2xl animate-fade-in delay-200">Aspiring Data Scientist | Python | SQL | Machine Learning</p>
      <div className="flex gap-4 mt-6">
        <a href="https://github.com/rahulraimau" className="bg-yellow-400 px-4 py-2 rounded-full text-black font-medium hover:bg-yellow-300 transition hover:scale-105" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/rahul-rai-629554245/" className="border border-white dark:border-black px-4 py-2 rounded-full hover:bg-white hover:text-black transition hover:scale-105" target="_blank">LinkedIn</a>
      </div>
    </section>
  );
}
