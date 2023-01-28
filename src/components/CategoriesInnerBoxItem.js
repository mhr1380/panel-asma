import deleteIcon from "../assets/images/delete.png";
import edit from "../assets/images/edit.png";
import { useState } from "react";
import React from "react";
import plus from "../assets/images/plus.png";
import { http } from "../http-service/http";
import DeletePopup from "./DeletePopUp";
const CategoriesInnerBoxItem = ({ title, id, url, setUpdateBox }) => {
  const [titleInput, setTitleInput] = useState(title);
  const [Editable, setEditable] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <>
      <DeletePopup
        url={url}
        show={showDeletePopup}
        setShow={setShowDeletePopup}
        deleteId={id}
        title={title}
        setUpdateBox={setUpdateBox}
      />
      <div
        className={`categories-bottom-box-item ${Editable ? "editable" : ""}`}
      >
        {Editable ? (
          <input
            className="categories-bottom-box-item-editable"
            type="text"
            value={titleInput}
            onChange={(e) => {
              setTitleInput(e.target.value);
            }}
          />
        ) : (
          <div className="categories-bottom-box-item-title">{titleInput}</div>
        )}

        <div className="categories-bottom-box-item-icons">
          <img
            src={deleteIcon}
            onClick={() => {
              setShowDeletePopup(true);
            }}
          />
          {Editable ? (
            <img
              src={plus}
              onClick={async () => {
                //  send requst to server
                const res = await http.patch(
                  `/${url}-api/${url}-categories/${id}/`,
                  {
                    farsi_name: titleInput,
                  }
                );
                console.log(res);
                setEditable(false);
              }}
            />
          ) : (
            <img
              src={edit}
              onClick={() => {
                setEditable(true);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CategoriesInnerBoxItem;
