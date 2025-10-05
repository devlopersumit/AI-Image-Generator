import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full mb-3">
      {/* Label */}
      <label
        htmlFor={name}
        className="w-full sm:w-1/4 text-sm font-semibold text-gray-800"
      >
        {labelName}
      </label>

      <div className="flex w-full sm:w-3/4 items-center gap-2">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-[#6469ff] focus:ring-2 focus:ring-[#6469ff]/40 transition-all duration-200"
        />

        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="whitespace-nowrap font-medium bg-[#6469ff] hover:bg-[#5356e0] active:bg-[#4548c2] text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Surprise Me
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
