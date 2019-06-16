import React, { useEffect } from "react";
import Notifications from "./Notifications";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ notifications }) => {
  const notify = () => toast(<Notifications notifications={notifications} />);

  return (
    <div>
      <div>
        <div className="fixed-action-btn">
          <a onClick={notify} className="btn-floating btn-large blue darken-2">
            <i className="large material-icons">notifications</i>
          </a>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Toast;
