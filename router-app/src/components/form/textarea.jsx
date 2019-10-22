import React from "react";

const Textarea = ({ name, label, value, onChange, error }) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <textarea
          name={name}
          id={name}
          rows="10"
          className="form-control"
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </React.Fragment>
  );
};

export default Textarea;
