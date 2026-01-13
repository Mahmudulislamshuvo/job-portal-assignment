import { FileText, Trash2, Upload } from "lucide-react";

const ResumeSection = () => {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-6">Resume/CV</h2>
      <div className="space-y-4">
        <div className="p-4 bg-[hsl(var(--color-secondary))] rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
              <FileText className="h-6 w-6 text-[hsl(var(--color-primary))]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">
                John_Doe_Resume.pdf
              </p>
              <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                Updated Nov 28, 2025 • 245 KB
              </p>
            </div>
            <button
              type="button"
              className="btn-ghost p-2 text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div>
          <label className="btn btn-outline w-full cursor-pointer">
            <Upload className="h-4 w-4 mr-2" />
            Upload New Resume
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
          </label>
          <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-2">
            Supported formats: PDF, DOC, DOCX. Max size: 5MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
