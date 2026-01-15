import { Download, FileText, Upload } from "lucide-react";
import { useRef } from "react";
import { useUploadResumeMutation } from "../../../../../features/api/apiSlice";
import { getFormatMonthYear } from "../../../../../utils/getFormatMonthYear";
import LoadingSpinner from "../../../../commonComponents/LoadingSpinner";

const Resume = ({ userData }) => {
  const fileref = useRef(null);
  const [uploadResume, { isLoading }] = useUploadResumeMutation();

  const handleUploadResume = () => {
    fileref.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.log("No file selected");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("resume", file);
      const response = await uploadResume(formData);
      if (response?.data?.success === true) {
        console.log("Resume uploaded successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resumeDownloadLink = userData?.resumeUrl
    ? userData.resumeUrl.startsWith("http")
      ? userData.resumeUrl
      : `${import.meta.env.VITE_SERVER_URL}${userData.resumeUrl}`
    : "";

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">Resume</h3>
      <div className="space-y-4">
        <div className="p-4 bg-secondary rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center shrink-0">
              <FileText className="h-6 w-6 text-[hsl(var(--color-primary))]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">
                {userData?.resumeOriginalName || "No Resume Uploaded"}
              </p>
              <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                {getFormatMonthYear(userData?.resumeUploadDate) || "N/A"}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {/* <button className="btn btn-outline w-full text-xs h-9">
              <Download className="h-3 w-3 mr-2" />
              Download
            </button> */}
            <a
              href={resumeDownloadLink}
              download={userData?.resumeOriginalName}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-outline w-full text-xs h-9 flex items-center justify-center ${
                !userData?.resumeUrl ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <Download className="h-3 w-3 mr-2" />
              Download
            </a>
          </div>
        </div>
        <input
          ref={fileref}
          hidden
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
        />
        <button
          disabled={isLoading}
          onClick={handleUploadResume}
          className="btn btn-outline w-full"
        >
          <Upload className="h-4 w-4 mr-2" />
          {isLoading ? <LoadingSpinner /> : "Update Resume"}
        </button>
      </div>
    </div>
  );
};

export default Resume;
