import React from "react";

export const Button = ({ name, className, onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

