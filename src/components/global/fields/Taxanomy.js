import React, { useState } from "react";

const TaxonomyField = ({}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedTaxonomy, setSelectedTaxonomy] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(selectedTaxonomy);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const term = inputValue.trim();
      if (term) {
        if (term && !selectedTaxonomy.includes(term)) {
          setSelectedTaxonomy([...selectedTaxonomy, term]);
          setInputValue("");
        } else {
          setErrorMessage("Duplicate Value not allow");
        }
      }
    }
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setInputValue(selectedTaxonomy[index]);
  };

  const handleEditBlur = () => {
    if (inputValue.trim() !== "" && !selectedTaxonomy.includes(inputValue)) {
      const updatedValues = [...selectedTaxonomy];
      updatedValues[editingIndex] = inputValue;
      setSelectedTaxonomy(updatedValues);
    }
    setEditingIndex(-1);
    setInputValue("");
  };

  //   const handleTaxonomyChange = (e) => {
  //     const selectedValue = e.target.value;
  //     if (selectedTaxonomy.includes(selectedValue)) {
  //       setSelectedTaxonomy(selectedTaxonomy.filter((value) => value !== selectedValue));
  //     } else {
  //       setSelectedTaxonomy([...selectedTaxonomy, selectedValue]);
  //     }
  //   };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {"This is label"}
      </label>
      <div className="flex flex-wrap space-x-2">
        <input
          type="text"
          className="border rounded py-2 px-3"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="mt-2">
        <p className="error text-red-500 font-medium">{errorMessage}</p>
        <div>
          {selectedTaxonomy.map((option, index) => (
            <div key={option} className="relative">
              {editingIndex === index ? (
                <input
                  type="text"
                  className="border rounded py-2 px-3"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleEditBlur}
                  onBlur={handleEditBlur}
                />
              ) : (
                <span
                  className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-sm cursor-pointer"
                  onClick={() => handleEditClick(index)}
                >
                  {option}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaxonomyField;
