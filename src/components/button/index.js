import React from "react";

const Button = ({ name, className, onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;