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
        {toast.message === "added" && <div className="toast-body">Added {toast.title} to the favorites list.</div>}
        {toast.message === "deleted" && <div className="toast-body">Deleted {toast.title} from the favorites list.</div>}
        {toast.message === "duplicate" && <div className="toast-body">{toast.title} is already in the favorites list.</div>}
      </div>
    </div>
  );
};

export default ToastMessage;
