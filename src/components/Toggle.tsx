import React from "react";

interface ToggleProps {
  isChecked: boolean;
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ isChecked, onToggle }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div
        className={`w-10 h-6 flex items-center rounded-full p-1 ${
          isChecked ? "bg-orange-500" : "bg-gray-300"
        }`}
        onClick={onToggle}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
            isChecked ? "translate-x-4" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Toggle;
