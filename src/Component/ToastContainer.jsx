/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext } from "react";
import Toast from "./Toast";
import PropTypes from "prop-types";

const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

const ToastContainer = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    setToasts((prev) => [...prev, { message, type }]);
    setTimeout(() => removeToast(0), 3000);
  };

  const removeToast = (index) => {
    setToasts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(index)}
        />
      ))}
    </ToastContext.Provider>
  );
};

ToastContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToastContainer;
