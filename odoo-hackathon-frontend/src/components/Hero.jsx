export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Odoo Hackathon 2026
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Build Your Vision with{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">OdooHack</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-3">
          A flexible platform for modern innovation.
        </p>
        <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10">
          Manage, automate, analyze, and simplify your workflows — all in one place.
          Whether you're building for education, productivity, AI, business, or civic tech,
          OdooHack adapts to your vision.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-indigo-700 bg-white border-2 border-indigo-200 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 shadow-sm hover:shadow-md transition-all duration-200">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}
