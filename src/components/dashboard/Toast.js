import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ notifications }) => {
  console.log(notifications);
  return (
    <div>
      <div>
        <button>Notify !</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Toast;
