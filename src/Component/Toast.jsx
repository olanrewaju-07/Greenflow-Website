import { useEffect } from "react";
import PropTypes from "prop-types";

const Toast = ({ message, type, onClose }) => {
  const toastClasses = {
    success: "bg-green-100 text-green-600",
    error: "bg-red-100 text-red-600",
    info: "bg-blue-100 text-blue-600",
  };

  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow ${toastClasses[type]}`}
      role="alert"
    >
      <div className="ml-3 text-sm font-normal">{message}</div>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error", "info"]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
