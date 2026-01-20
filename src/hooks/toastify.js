import { toast, Bounce } from "react-toastify";

const SuccessToast = (msg = "Success Message Missing!!") => {
  toast.success(msg, {
    className: "custom-success-toast",
    bodyClassName: "custom-toast-body",
    progressClassName: "custom-toast-progress",
    position: "top-right",
    autoClose: 4000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
  });
};
const ErrorToast = (msg = "Error Message Missing!!") => {
  toast.error(msg, {
    className: "custom-toast error-toast",
    bodyClassName: "custom-toast-body",
    progressClassName: "custom-toast-progress error-progress",
    position: "top-right",
    autoClose: 4000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Bounce,
  });
};

/* ---------- INFO TOAST ---------- */
const InfoToast = (msg = "Info Message Missing!!") => {
  toast.info(msg, {
    className: "custom-toast info-toast",
    bodyClassName: "custom-toast-body",
    progressClassName: "custom-toast-progress info-progress",
    position: "top-right",
    autoClose: 4000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Bounce,
  });
};

export { SuccessToast, ErrorToast, InfoToast };
