import "./form-input.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form_group">
      <input className="form_input" {...otherProps} />
      {/* conditional rendering */}
      {label && (
        <label
          className={`${otherProps.value.length ? "shrink" : null} form_label`}
          htmlFor=""
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
