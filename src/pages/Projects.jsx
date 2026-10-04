import './Services.css';

function Projects() {
  return (
    <section className="services">
      <h2 className="services-title">Projects</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>FlashBarrel</h3>
          <p>
            Ongoing project. A web application built for efficient flashcard-based learning.
          </p>
          <a
            href="https://github.com/Izkuzima/FlashBarrel"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#3498db', textDecoration: 'none', fontWeight: '500' }}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;