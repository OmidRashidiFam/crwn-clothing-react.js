import "./button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "btn_google_signin",
  inverted: "btn_inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`btn ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
