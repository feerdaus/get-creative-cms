import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import { FieldValidator } from "final-form";
import { FC, ReactNode } from "react";
import { Field } from "react-final-form";
import Input from "./Input";
interface FinalFormInputProps {
  validation?: FieldValidator<any>;
  name: string;
  label: string;
  placeholder: string;
  /*
    type property denotes input types such as text, tel, number, email etc...
  */
  type?: string;
  adornment?: ReactNode;
  icon?: ReactNode;
}

const FinalFormInput: FC<FinalFormInputProps> = ({
  validation,
  name,
  label,
  placeholder,
  type = "text",
  adornment = undefined,
  icon = undefined,
}) => {
  return (
    <Box mb={3}>
      <Field name={name} validate={validation ? validation : undefined}>
        {({ input, meta }) => (
          <Box>
            <Box
              component="span"
              gap={1}
              mb={1}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              {icon}
              <label htmlFor={name}>{label}</label>
            </Box>
            <Input
              error={meta.error && meta.touched ? true : false}
              {...input}
              id={name}
              type={type}
              placeholder={placeholder}
              endAdornment={adornment ? adornment : undefined}
            />
            {meta.error && meta.touched && (
              <FormHelperText error={meta.error ? true : false}>
                {meta.error}
              </FormHelperText>
            )}
          </Box>
        )}
      </Field>
    </Box>
  );
};

export default FinalFormInput;
