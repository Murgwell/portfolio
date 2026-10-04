function Projects() {
  return (
    <section className="mx-auto w-full max-w-6xl">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
          <h3 className="mb-3 text-xl font-semibold text-blue-600">FlashBarrel</h3>
          <p className="mb-4 leading-relaxed text-gray-700">
            Ongoing project. A web application built for efficient flashcard-based learning.
          </p>
          <a
            href="https://github.com/Izkuzima/FlashBarrel"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            View on GitHub
          </a>
        </article>
      </div>
    </section>
  );
}

export default Projects;
