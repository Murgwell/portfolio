import './About.css';

function About() {
  return (
    <section className="about py-8 px-4 max-w-4xl mx-auto">
      <h2 className="about-title text-3xl font-bold text-gray-800 mb-6">About Me</h2>
      <p className="about-text text-gray-700 leading-relaxed mb-4">
        I'm a BSIT Student at Cebu Institute of Technology - University with a
        passion for software development.
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>C++</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
      <p className="text-gray-700">
        BSIT - Cebu Institute of Technology - University
      </p>
    </section>
  );
}

export default About;