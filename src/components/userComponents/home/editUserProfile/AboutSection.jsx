const AboutSection = ({ register, errors, data }) => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">About</h2>
      <div>
        <label htmlFor="bio" className="label block mb-2">
          Professional Summary
        </label>
        <textarea
          id="bio"
          className="textarea w-full"
          rows="5"
          placeholder="Write a brief summary about yourself, your experience, and what you're looking for..."
          defaultValue={data?.bio}
          {...register("bio", { required: "Bio is required" })}
        ></textarea>
        {errors.bio && (
          <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
