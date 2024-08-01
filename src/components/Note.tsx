import { StyledInput } from "../styled-components/toolbar/StyledInput";
import { Formik, useField } from "formik";
import * as Yup from "yup";

interface Props {
  data: {
    content: string;
    color: string;
  };
}

interface TextInputProps {
  [x: string]: string | object;
  name: string;
  style: { backgroundColor: string };
}

const TextInput = ({ ...props }: TextInputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledInput className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function Note({ data }: Props) {
  return (
    <Formik
      initialValues={{
        content: data.content,
        color: "",
      }}
      validationSchema={Yup.object({
        content: Yup.string(),
        //add conditions if needed later here
        // .max(15, "Must be 15 characters or less")
        // .required("Required"),
      })}
      onSubmit={(_values, { setSubmitting }) => {
        // setNote([...note, { id: nextId++, values }]);
        setSubmitting(false);
      }}
    >
      <TextInput
        name="content"
        type="text"
        style={{ backgroundColor: data.color }}
      ></TextInput>
    </Formik>
  );
}

export default Note;
