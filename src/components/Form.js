import React from "react";

const Form = ({ handleSubmit, value, setValue }) => {
  console.log("Form is Rendering");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex pt-2">
      <input
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        onChange={handleChange}
        type="text"
        name="value"
        placeholder="해야 할 일을 입력하세요."
        value={value}
      />
      <button
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
        type="submit"
        value="입력"
      >
        입력
      </button>
    </form>
  );
};

export default Form;
