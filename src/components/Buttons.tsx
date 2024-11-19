import React from "react";

interface ButtonProps {
  text: string;
  className: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full font-soehne-buch text-xs px-4 py-3 transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
