import { FiX, FiUpload, FiFileText, FiTrash2, FiSend } from "react-icons/fi";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const ApplyModal = ({ open, onClose, handleApply, isApplying }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      showCloseIcon={false}
      styles={{
        modal: {
          padding: 0,
          maxWidth: "42rem",
          width: "100%",
          borderRadius: "0.5rem",
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <div className="card w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Apply for Position</h2>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mt-1">
                Complete the form below to submit your application
              </p>
            </div>
            <button onClick={onClose} className="btn-ghost p-2">
              <FiX className="h-5 w-5" />
            </button>
          </div>

          {/* */}
          <div className="space-y-3">
            <label className="text-sm font-medium">
              Resume <span className="text-red-500">*</span>
            </label>

            {/* */}
            <div
              id="uploadArea"
              className="border-2 border-dashed border-[hsl(var(--color-border))] rounded-lg p-8 text-center hover:border-[hsl(var(--color-primary))] transition-colors cursor-pointer"
            >
              <input
                type="file"
                id="resumeInput"
                accept=".pdf"
                className="hidden"
              />
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                  <FiUpload className="h-6 w-6 text-[hsl(var(--color-primary))]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Click to upload resume</p>
                  <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-1">
                    PDF file only (Max 5MB)
                  </p>
                </div>
              </div>
            </div>

            {/* */}
            <div
              id="filePreview"
              className="hidden border border-[hsl(var(--color-border))] rounded-lg p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                    <FiFileText className="h-5 w-5 text-[hsl(var(--color-primary))]" />
                  </div>
                  <div>
                    <p id="fileName" className="text-sm font-medium"></p>
                    <p
                      id="fileSize"
                      className="text-xs text-[hsl(var(--color-muted-foreground))]"
                    ></p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    // onClick="reuploadFile()"
                    className="btn btn-outline text-xs h-8 px-3"
                  >
                    <FiUpload className="h-3 w-3 mr-1" />
                    Reupload
                  </button>
                  <button
                    // onClick="removeFile()"
                    className="btn btn-outline text-xs h-8 px-3 text-red-600 hover:bg-red-50"
                  >
                    <FiTrash2 className="h-3 w-3 mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* */}
          <div className="space-y-3">
            <label htmlFor="coverMessage" className="text-sm font-medium">
              Cover Message
              <span className="text-[hsl(var(--color-muted-foreground))]">
                (Optional)
              </span>
            </label>

            <textarea
              id="coverMessage"
              className="textarea textarea-bordered w-full h-40 p5 input resize-none"
              placeholder="Write a brief message about why you're a great fit for this role..."
            ></textarea>

            <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
              <span id="charCount">0</span>/500 characters
            </p>
          </div>

          {/* */}
          <div className="flex gap-3 pt-4 border-t border-[hsl(var(--color-border))]">
            <button onClick={onClose} className="btn btn-outline flex-1">
              Cancel
            </button>
            <button
              onClick={handleApply}
              disabled={isApplying}
              className="btn btn-primary flex-1"
            >
              <FiSend className="h-4 w-4 mr-2" />
              {isApplying ? "Sending..." : "Submit Application"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ApplyModal;
