import React from "react";

const Button = ({ name, className, onClick, style }) => {
  return (
    <div>
      <button
        className={className}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
