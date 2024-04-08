import React from 'react';

export const InputField = ({value, label, name, type, placeholder,className, onChange}) => {
    const handleChange = (e) => {
        const {value} = e.target;
        onChange(value);
    }
  return (
    <div>
        <label htmlFor={label}>{label}</label>
        <input
            className={className}
            label={label}
            type={type} 
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            required
        />
    </div>
  )
}