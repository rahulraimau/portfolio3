// components/Layout.js
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navbar />
      <main className="flex-1 overflow-y-auto p-8 max-w-6xl mx-auto">
        {children}
      </main>
    </div>
  );
}
