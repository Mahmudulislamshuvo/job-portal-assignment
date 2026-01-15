const SAVED_JOBS_KEY = "savedJobs";

// Helper functions for local storage
const getSavedJobsFromLocalStorage = () => {
  const savedJobs = localStorage.getItem(SAVED_JOBS_KEY);
  return savedJobs ? JSON.parse(savedJobs) : [];
};

const saveJobToLocalStorage = (jobId) => {
  const savedJobs = getSavedJobsFromLocalStorage();
  if (!savedJobs.includes(jobId)) {
    localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify([...savedJobs, jobId]));
  }
};

const removeJobFromLocalStorage = (jobId) => {
  const savedJobs = getSavedJobsFromLocalStorage();
  const updatedSavedJobs = savedJobs.filter((id) => id !== jobId);
  localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(updatedSavedJobs));
};

export {
  getSavedJobsFromLocalStorage,
  saveJobToLocalStorage,
  removeJobFromLocalStorage,
};
