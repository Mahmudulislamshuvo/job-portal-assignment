const About = ({ bio }) => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-4">About</h2>
      <p className="text-foreground leading-relaxed">{bio}</p>
    </div>
  );
};

export default About;
