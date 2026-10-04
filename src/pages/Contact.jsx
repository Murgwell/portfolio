function Contact() {
  return (
    <section className="mx-auto w-full max-w-4xl">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">Contact</h2>
      <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-md">
        <p className="mb-4 text-gray-700">
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
