import './Services.css';

function Contact() {
  return (
    <section className="services">
      <h2 className="services-title">Contact</h2>
      <div className="service-card">
        <p style={{ marginBottom: '0.75rem' }}>
          Feel free to reach out if you'd like to connect or collaborate.
        </p>
        <p>
          <strong>Email:</strong> romar.alaman@cit.edu
        </p>
        <p>
          <strong>Location:</strong> Cebu, Philippines
        </p>
      </div>
    </section>
  );
}

export default Contact;