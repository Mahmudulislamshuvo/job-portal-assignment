const AboutSection = () => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">About</h2>
      <div>
        <label htmlFor="bio" className="label block mb-2">
          Professional Summary
        </label>
        <textarea
          id="bio"
          className="textarea"
          rows="5"
          placeholder="Write a brief summary about yourself, your experience, and what you're looking for..."
          defaultValue="Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. Passionate about creating clean, efficient code and delivering exceptional user experiences. Strong background in React, Node.js, and cloud technologies."
        ></textarea>
      </div>
    </div>
  );
};

export default AboutSection;
