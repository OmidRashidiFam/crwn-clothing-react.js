// Import a set of custom button styles
import {
  BaseButton,
  GoogleSignedInButton,
  InvertedButton,
} from "./button.style";

// Define types for the buttons
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

// A function to select which button type to render
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignedInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

// Function component for rendering a custom button based on props
const Button = ({ children, buttonType, ...otherProps }) => {
  // Get the correct button based on the given buttonType prop
  const CustomButton = getButton(buttonType);

  // Render the CustomButton with other props
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

// Export Button component
export default Button;
