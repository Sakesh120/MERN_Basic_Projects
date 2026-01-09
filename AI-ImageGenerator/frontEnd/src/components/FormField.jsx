import React from "react";

const FormField = ({
  LableName,
  type,
  name,
  value,
  handleSurpriseMe,
  isSurpriseMe,
  handleChange,
  placeholder,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {LableName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#6469ff] py-1 px-2 rounded-[5px] text-white"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 outline-none"
      />
    </div>
  );
};

export default FormField;
