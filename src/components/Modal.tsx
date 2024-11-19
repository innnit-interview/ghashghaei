import React from "react";
import Form from "./Form";

const Modal: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl border-2 border-purple-500">
      <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">
        Neues Update erstellen
      </h2>
      <Form />
    </div>
  );
};

export default Modal;
