import './About.css';

function About() {
  return (
    <section className="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        I'm a BSIT Student at Cebu Institute of Technology - University with a
        passion for software development.
      </p>
      <h3 className="about-title" style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Skills</h3>
      <ul style={{ color: '#444', lineHeight: '1.8' }}>
        <li>C++</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <h3 className="about-title" style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Education</h3>
      <p className="about-text">BSIT - Cebu Institute of Technology - University</p>
    </section>
  );
}

export default About;