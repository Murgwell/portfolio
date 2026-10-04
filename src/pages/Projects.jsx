import './Services.css';

function Projects() {
  return (
    <section className="services py-8 px-4 max-w-6xl mx-auto">
      <h2 className="services-title text-3xl font-bold text-gray-800 mb-8">Projects</h2>
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">FlashBarrel</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ongoing project. A web application built for efficient flashcard-based learning.
          </p>
          <a
            href="https://github.com/Izkuzima/FlashBarrel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;