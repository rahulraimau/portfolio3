// components/Contact.js
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white text-center relative">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-2">📧 <a href="mailto:rahulraimau5@gmail.com" className="underline">rahulraimau5@gmail.com</a></p>
      <p className="mb-2">📞 +91 95600 36286</p>
      <p>🔗 <a href="https://github.com/rahulraimau" target="_blank" className="underline">github.com/rahulraimau</a></p>
      <p>🔗 <a href="https://linkedin.com/in/rahul-rai-629554245/" target="_blank" className="underline">linkedin.com/in/rahul-rai</a></p>
      <a href="/Rahul_Rai_Resume.pdf" download className="mt-6 inline-block bg-yellow-400 text-black font-medium px-6 py-2 rounded-full hover:bg-yellow-300 transition">📄 Download Resume</a>
    </section>
  );
}
