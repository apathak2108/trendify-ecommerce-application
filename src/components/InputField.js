import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const InputField = ({
  value,
  label,
  name,
  type,
  placeholder,
  className,
  onChange,
  maxLength,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        className={className}
        label={label}
        type={showPassword ? "text" : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        maxLength={maxLength}
        required
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "5px",
            top: "70%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
};