import { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, X, Send } from "lucide-react";

const CreateJobForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skills: [],
      vacancies: 1,
      salaryPeriod: "yearly",
    },
  });

  // Local state for the skill input field before adding it to the form
  const [skillInput, setSkillInput] = useState("");

  // Watch the skills array to render the tags
  // eslint-disable-next-line react-hooks/incompatible-library
  const skills = watch("skills");

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setValue("skills", [...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setValue(
      "skills",
      skills.filter((skill) => skill !== skillToRemove),
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="jobTitle" className="label block mb-2">
                Job Title *
              </label>
              <input
                type="text"
                id="jobTitle"
                className={`input ${errors.title ? "border-red-500" : ""}`}
                placeholder="e.g. Senior Full Stack Developer"
                {...register("title", { required: "Job title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="jobType" className="label block mb-2">
                  Job Type *
                </label>
                <select
                  id="jobType"
                  className="select"
                  {...register("type", { required: true })}
                >
                  <option value="">Select job type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="internship">Internship</option>
                </select>
                {errors.type && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>

              <div>
                <label htmlFor="workMode" className="label block mb-2">
                  Work Mode *
                </label>
                <select
                  id="workMode"
                  className="select"
                  {...register("workMode", { required: true })}
                >
                  <option value="">Select work mode</option>
                  <option value="On-Site">On-site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
                {errors.workMode && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="label block mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  className="select"
                  {...register("category", { required: true })}
                >
                  <option value="">Select category</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="product">Product</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="hr">Human Resources</option>
                  <option value="finance">Finance</option>
                  <option value="other">Other</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>

              <div>
                <label htmlFor="experience" className="label block mb-2">
                  Experience Level *
                </label>
                <select
                  id="experience"
                  className="select"
                  {...register("experienceLevel", { required: true })}
                >
                  <option value="">Select experience level</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (2-5 years)</option>
                  <option value="senior">Senior Level (5-10 years)</option>
                  <option value="lead">Lead (10+ years)</option>
                </select>
                {errors.experienceLevel && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">
            Location & Compensation
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="label block mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="city"
                  className="input"
                  placeholder="e.g. San Francisco"
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>

              <div>
                <label htmlFor="salaryMin" className="label block mb-2">
                  Minimum Salary ($)
                </label>
                <input
                  type="number"
                  id="salaryMin"
                  className="input"
                  placeholder="e.g. 100000"
                  {...register("salaryMin")}
                />
              </div>

              <div>
                <label htmlFor="salaryMax" className="label block mb-2">
                  Maximum Salary ($)
                </label>
                <input
                  type="number"
                  id="salaryMax"
                  className="input"
                  placeholder="e.g. 150000"
                  {...register("salaryMax")}
                />
              </div>

              <div>
                <label htmlFor="salaryPeriod" className="label block mb-2">
                  Salary Period
                </label>
                <select
                  id="salaryPeriod"
                  className="select"
                  {...register("salaryPeriod")}
                >
                  <option value="Yearly">Yearly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Hourly">Hourly</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Job Description</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="description" className="label block mb-2">
                Job Description *
              </label>
              <textarea
                id="description"
                className="textarea w-full px-2"
                rows="8"
                placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">Required</p>
              )}
              <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-2">
                Provide a detailed description of the role and responsibilities
              </p>
            </div>

            <div>
              <label htmlFor="requirements" className="label block mb-2">
                Requirements & Qualifications
              </label>
              <textarea
                id="requirements"
                className="textarea w-full px-2"
                rows="6"
                placeholder="List the required skills, qualifications, and experience..."
                {...register("requirements")}
              ></textarea>
            </div>

            <div>
              <label htmlFor="benefits" className="label block mb-2">
                Benefits & Perks
              </label>
              <textarea
                id="benefits"
                className="textarea w-full px-2"
                rows="5"
                placeholder="Describe the benefits, perks, and what makes your company a great place to work..."
                {...register("benefits")}
              ></textarea>
            </div>
          </div>
        </div>

        {/* */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Required Skills</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="skillInput" className="label block mb-2">
                Add Skills *
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="skillInput"
                  className="input flex-1"
                  placeholder="Type a skill and press Add"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="btn btn-primary"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </button>
              </div>
              <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-2">
                Add technical and soft skills required for this position
              </p>
            </div>

            <div>
              <label className="label block mb-3">Added Skills</label>
              <div className="flex flex-wrap gap-2">
                {skills && skills.length > 0 ? (
                  skills.map((skill, index) => (
                    <span
                      key={index}
                      className="badge badge-secondary inline-flex items-center gap-1"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="hover:text-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-400 italic">
                    No skills added yet.
                  </span>
                )}
              </div>
              {/* Hidden input to ensure validation works if needed, though 'watch' handles the logic */}
              <input
                type="hidden"
                {...register("skills", {
                  validate: (value) =>
                    value.length > 0 || "At least one skill is required",
                })}
              />
              {errors.skills && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.skills.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Application Settings</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="vacancies" className="label block mb-2">
                  Number of Vacancies
                </label>
                <input
                  type="number"
                  id="vacancies"
                  className="input"
                  placeholder="e.g. 2"
                  min="1"
                  {...register("vacancies", { valueAsNumber: true })}
                />
              </div>

              <div>
                <label htmlFor="deadline" className="label block mb-2">
                  Application Deadline *
                </label>
                <input
                  type="date"
                  id="deadline"
                  className="input"
                  {...register("deadline", { required: true })}
                />
                {errors.deadline && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* */}
        <div className="card p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1"></div>
            <a href="company-dashboard.html" className="btn btn-outline">
              Cancel
            </a>
            <button type="submit" className="btn btn-primary">
              <Send className="h-4 w-4 mr-2" />
              Publish Job
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateJobForm;
