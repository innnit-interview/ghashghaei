import React, { useState } from "react";
import Input from "./Input";
import Button from "./Buttons";
import Toggle from "./Toggle";

const Form: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [newsContent, setNewsContent] = useState<string>("");
  const [isAuthorEditable, setIsAuthorEditable] = useState<boolean>(false);
  const [authorName, setAuthorName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSaveDraft = () => {
    if (!title || !newsContent) {
      setErrorMessage("Bitte füllen Sie alle Felder aus!"); // Set error message state
      return;
    }
    setErrorMessage(""); // Clear error message if validation passes
    const formData = { title, newsContent, authorName };
    localStorage.setItem("formDraft", JSON.stringify(formData));
    alert("Entwurf gespeichert!");
  };

  return (
    <form className="space-y-6 p-6">
      {/* Title */}
      <div>
        <label className="block font-soehne-buch text-xl font-medium text-orange-500 mb-1">
          Titel
        </label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Geben Sie den Titel ein"
          maxLength={100}
        />
        <p className="text-xs font-soehne-buch flex justify-end text-gray-500 mt-1">
          {title.length}/100 Zeichen
        </p>
      </div>

      {/* News Content */}
      <div>
        <label className="block text-xl font-soehne-buch font-medium text-orange-500 mb-1">
          Deine Neuigkeiten
        </label>
        <Input
          type="textarea"
          value={newsContent}
          onChange={(e) => setNewsContent(e.target.value)}
          placeholder="Bitte schreibe ein paar Worte zu deinem Update."
          rows={4}
        />
      </div>

      {/* Error Message */}
      {errorMessage && (
        <p className="text-red-500 text-sm font-soehne-buch">{errorMessage}</p>
      )}

      {/* Author */}
      <div>
        <div className="flex items-center space-x-4">
          <span className="text-xl font-soehne-buch text-orange-500">
            Absender
          </span>
          <div className="flex items-center">
            <Toggle
              isChecked={isAuthorEditable}
              onToggle={() => setIsAuthorEditable(!isAuthorEditable)}
            />
            <span className="text-xs text-gray-700 ml-1">Absender ändern</span>
          </div>
        </div>
        <p className="text-xs text-gray-700 my-2 whitespace-nowrap">
          Hier hast du die Option, das Update unter einem anderen Namen zu
          veröffentlichen.
        </p>
        <span className="block font-soehne-buch mb-2 mt-4 text-xs text-gray-700">
          Absender
        </span>
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          readOnly={!isAuthorEditable}
          placeholder="Vorname Nachname"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center space-x-4">
        <Button
          text="Abbrechen"
          className="bg-white border border-gray-300 text-orange-500 hover:bg-gray-100"
          onClick={() => alert("Abbrechen clicked")}
        />
        <Button
          text="Entwurf speichern"
          className="bg-purple-600 text-white hover:bg-purple-500"
          onClick={handleSaveDraft}
        />
        <Button
          text="Update veröffentlichen"
          className="bg-orange-500 text-white hover:bg-orange-400"
          onClick={() => alert("Update veröffentlichen clicked")}
        />
      </div>
    </form>
  );
};

export default Form;
