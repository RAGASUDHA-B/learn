const buttons = [
  { label: "Add New", variant: "primary" },
  { label: "Upload File", variant: "primary" },
  { label: "Download Report", variant: "secondary" },
  { label: "Generate Summary", variant: "secondary" },
  { label: "Submit Request", variant: "primary" },
  { label: "Approve", variant: "success" },
  { label: "Reject", variant: "danger" },
  { label: "Save Changes", variant: "primary" },
  { label: "Delete", variant: "danger" },
  { label: "Export", variant: "secondary" },
];

const variantStyles = {
  primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg",
  secondary: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm hover:shadow-md",
  success: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg",
  danger: "bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg",
};

export default function ButtonsShowcase() {
  return (
    <section id="buttons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready-to-Use Actions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pre-styled buttons for every common action your users need.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${variantStyles[btn.variant]}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
