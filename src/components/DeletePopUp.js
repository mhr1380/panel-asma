import { http } from "../http-service/http";
import React from "react";
const DeletePopup = ({ show, setShow, deleteId, url, title, setUpdateBox }) => {
  return (
    <div className={`delete-popup-background ${show ? "show" : ""}`}>
      <div className="delete-popup-body">
        <p>آیا از حذف کردن (({` ${title} `})) اطمینان دارید؟</p>
        <div className="delete-popup-buttons">
          <button
            className="def-btn delete-popup-buttons-cancel"
            onClick={() => {
              setShow(false);
            }}
          >
            لغو
          </button>
          <button
            className="def-btn delete-popup-buttons-delete"
            onClick={async () => {
              //  send requst to server
              const res = await http.delete(
                `/${url}-api/${url}-categories/${deleteId}/`
              );

              console.log(res);
              setUpdateBox((prev) => prev + 1);
              setShow(false);
            }}
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
