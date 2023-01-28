import left from "../assets/images/left.png";
import React from "react";
const RequestsBoxItem = ({
  name = "",
  count = "0",
  onClick,
  id,
  secondName,
}) => {
  return (
    <div
      className="request-box-out-item"
      onClick={() => {
        if (onClick) onClick(id);
      }}
    >
      <div className={`requests-box-item ${secondName ? "width-90" : ""}`}>
        <span> {name}</span>
        {secondName ? (
          <span style={{ direction: "ltr" }}>{secondName}</span>
        ) : (
          <img src={left} />
        )}
      </div>
      {count > 0 && <div className="requests-box-item-count">{count}</div>}
    </div>
  );
};

export default RequestsBoxItem;
