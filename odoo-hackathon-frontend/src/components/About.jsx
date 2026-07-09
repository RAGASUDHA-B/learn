export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About the Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            OdooHack is a flexible, adaptable digital platform built for
            hackathons. It can be configured to solve real-world problems
            across education, productivity, AI, business, civic tech,
            sustainability, finance, healthcare, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4 p-5 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 text-xl">⚡</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Automation</h3>
                <p className="text-sm text-gray-600">Eliminate repetitive tasks with intelligent workflow automation that saves time and reduces errors.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 text-xl">🤝</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Collaboration</h3>
                <p className="text-sm text-gray-600">Work together in real-time with shared tools, role-based access, and seamless communication.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 p-5 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 text-xl">🧠</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Smart Decision-Making</h3>
                <p className="text-sm text-gray-600">Leverage data-driven insights and AI-powered recommendations to make better choices faster.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 text-xl">🎯</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">User-Friendly Workflow</h3>
                <p className="text-sm text-gray-600">Intuitive interface designed for users of all skill levels, with minimal learning curve.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
