import { FileText, Trash2, Upload } from "lucide-react";
import { useEffect, useState } from "react";

const ResumeSection = ({ register, data, setValue }) => {
  const [resumeFile, setResumeFile] = useState(data?.resume);

  useEffect(() => {
    setValue("resume", resumeFile, { shouldValidate: true });
  }, [resumeFile, setValue]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleRemoveResume = () => {
    setResumeFile(null);
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Resume/CV *</h2>
      <div className="space-y-4">
        {resumeFile && (
          <div className="p-4 bg-[hsl(var(--color-secondary))] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center shrink-0">
                <FileText className="h-6 w-6 text-[hsl(var(--color-primary))]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">
                  {resumeFile.name || "resume.pdf"}
                </p>
                <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                  {resumeFile.size
                    ? `${(resumeFile.size / 1024).toFixed(2)} KB`
                    : ""}
                </p>
              </div>
              <button
                type="button"
                className="btn-ghost p-2 text-red-600 hover:bg-red-50"
                onClick={handleRemoveResume}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        <div>
          <label className="btn btn-outline w-full cursor-pointer">
            <Upload className="h-4 w-4 mr-2" />
            {resumeFile ? "Upload New Resume" : "Upload Resume"}
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </label>
          <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-2">
            Supported formats: PDF, DOC, DOCX. Max size: 5MB
          </p>
          <input type="hidden" {...register("resume")} />
          {/* {errors.resume && (
            <p className="text-red-500 text-sm mt-1">
              {errors.resume.message}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
