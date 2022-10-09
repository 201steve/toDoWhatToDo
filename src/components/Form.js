import React from "react";

const Form = ({ handleSubmit, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <input
        onChange={handleChange}
        type="text"
        name="value"
        style={{ flex: "10", padding: "5px" }}
        placeholder="해야 할 일을 입력하세요."
        value={value}
      />
      <button type="submit" value="입력" className="btn" style={{ flex: "1" }}>
        입력
      </button>
    </form>
  );
};

export default Form;
