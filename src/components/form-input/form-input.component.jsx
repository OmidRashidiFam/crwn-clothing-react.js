// Import style
import { FormContainer, Input, FormLable } from "./form-input.style";

// Create a functional component c
const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormContainer>
      {/* Spread the otherProps into the Input component */}
      <Input {...otherProps} />
      {/* Conditionally render the FormLabel component if the label prop is present */}
      {label && <FormLable shrink={otherProps.value.length}>{label}</FormLable>}
    </FormContainer>
  );
};

// Export FormInput component
export default FormInput;
