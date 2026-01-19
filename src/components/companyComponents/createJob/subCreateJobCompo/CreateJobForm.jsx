import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Plus, X, Send } from "lucide-react";
import LoadingSpinner from "../../../commonComponents/LoadingSpinner";
import { Link } from "react-router-dom";
import { getFormatDateForInput } from "../../../../utils/getFormatDateForInput";

const CreateJobForm = ({ onSubmit, isLoading, initialData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skills: [],
      vacancies: 1,
      salaryPeriod: "Yearly",
      ...initialData,
      deadline: getFormatDateForInput(initialData?.deadline) || "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        ...initialData,
        deadline: getFormatDateForInput(initialData?.deadline) || "",
      });
    }
  }, [initialData, reset]);

  const [skillInput, setSkillInput] = useState("");
  // eslint-disable-next-line react-hooks/incompatible-library
  const skills = watch("skills") || [];

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

  const isEditMode = !!initialData;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* --- 1. Basic Information --- */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">
            {isEditMode ? "Edit Job Information" : "Basic Information"}
          </h2>
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
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
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
                  <option value="On-Site">On-Site</option>
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
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Product">Product</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="HR">Human Resources</option>
                  <option value="Finance">Finance</option>
                  <option value="Other">Other</option>
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
                  <option value="Entry">Entry Level (0-2 years)</option>
                  <option value="Mid">Mid Level (2-5 years)</option>
                  <option value="Senior">Senior Level (5-10 years)</option>
                  <option value="Lead">Lead (10+ years)</option>
                </select>
                {errors.experienceLevel && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. Location & Compensation --- */}
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
                  {...register("salaryMin", { valueAsNumber: true })}
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
                  {...register("salaryMax", { valueAsNumber: true })}
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

        {/* --- 3. Job Description --- */}
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

        {/* --- 4. Required Skills --- */}
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

        {/* --- 5. Application Settings --- */}
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

        {/* --- Form Actions --- */}
        <div className="card p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1"></div>
            <Link to={"/company-dashboard"} className="btn btn-outline">
              Cancel
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              <Send className="h-4 w-4 mr-2" />
              {isLoading ? (
                <LoadingSpinner />
              ) : isEditMode ? (
                "Update Job"
              ) : (
                "Publish Job"
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateJobForm;
