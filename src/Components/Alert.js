import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowercase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert-danger fs-4 alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.type}</strong>:{props.alert.msg}
      </div>
    )
  );
}

export default Alert;
