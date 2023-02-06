import React from "react";
import "./ToastMessage.css";
import { useDispatch } from "react-redux";
import { removeToast } from "../redux/toastSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ToastMessage = (payload) => {
  const dispatch = useDispatch();
  const toast = payload.toast;
  return (
    <div className="">
      <div
        className="toast show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <FontAwesomeIcon icon={faCheck} size="3x" />
          <div className="container float-end">
            <button
              type="button"
              className="btn btn-primary float-end"
              aria-label="Close"
              onClick={() => dispatch(removeToast(toast))}
            >
              close
            </button>
          </div>
        </div>
        <div className="toast-body">Successfully added {toast.title}.</div>
      </div>
    </div>
  );
};

export default ToastMessage;
