const quickLinks = ["Home", "Features", "Dashboard", "About", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">O</div>
              <span className="text-xl font-bold text-white">OdooHack</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              A flexible, modern platform for hackathon innovation. Adapt it to any problem statement.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Tech Stack</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>React 19 + Vite</li>
              <li>Tailwind CSS</li>
              <li>Ready for API Integration</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} OdooHack. Made with 💜 for the Odoo Hackathon.
          </p>
        </div>
      </div>
    </footer>
  );
}
