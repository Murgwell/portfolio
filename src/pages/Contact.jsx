import './Services.css';

function Contact() {
  return (
    <section className="services py-8 px-4 max-w-4xl mx-auto">
      <h2 className="services-title text-3xl font-bold text-gray-800 mb-8">Contact</h2>
      <div className="service-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <p className="text-gray-700 mb-4">
          Feel free to reach out if you'd like to connect or collaborate.
        </p>
        <div className="space-y-3">
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> romar.alaman@cit.edu
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Location:</span> Cebu, Philippines
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;