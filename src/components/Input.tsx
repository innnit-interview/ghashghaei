import React from "react";

interface InputProps {
  type: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  readOnly?: boolean;
  rows?: number;
  maxLength?: number; // To handle character limits
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  readOnly = false,
  rows,
  maxLength,
}) => {
  return type === "textarea" ? (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      rows={rows}
      maxLength={maxLength}
      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring focus:ring-orange-500 focus:outline-none placeholder:text-sm"
    />
  ) : (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      maxLength={maxLength}
      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring focus:ring-orange-500 focus:outline-none placeholder:text-sm"
    />
  );
};

export default Input;
