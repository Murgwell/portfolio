function About() {
  return (
    <section className="mx-auto w-full max-w-4xl">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">About Me</h2>
      <p className="mb-4 max-w-2xl leading-relaxed text-gray-700">
        I'm a BSIT Student at Cebu Institute of Technology - University with a
        passion for software development.
      </p>
      <h3 className="mb-4 text-2xl font-semibold text-gray-800">Skills</h3>
      <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
        <li>C++</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <h3 className="mb-4 text-2xl font-semibold text-gray-800">Education</h3>
      <p className="text-gray-700">
        BSIT - Cebu Institute of Technology - University
      </p>
    </section>
  );
}

export default About;
