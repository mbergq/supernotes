import Notes from "./Notes";
import { ToolbarContainer } from "../styled-components/toolbar/ToolbarContainer";
import { NewButton } from "../styled-components/toolbar/NewButton";
import { StyledInput } from "../styled-components/toolbar/StyledInput";
import { useState } from "react";

import { Formik, Form, Field, useField } from "formik";
import * as Yup from "yup";

interface NoteValues {
  id: number;
  values: { content: string; color: string };
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

let nextId = 0;
const noteBGColors = ["#d6ffe9", "#bbc2e2", "#de6c83", "#7b72ac", "#fbd589"];
function Toolbar() {
  const [note, setNote] = useState<NoteValues[]>([]);
  function handleClick() {
    // trigger new note functionality here
  }
  return (
    <>
      <ToolbarContainer>
        <NewButton onClick={handleClick}>new</NewButton>
        <Formik
          initialValues={{
            content: "",
            color: "",
          }}
          validationSchema={Yup.object({
            content: Yup.string(),
            //add conditions if needed later here
            // .max(15, "Must be 15 characters or less")
            // .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setNote([...note, { id: nextId++, values }]);
            setSubmitting(false);
          }}
        >
          {({ values }) => (
            <Form>
              <div id="radio-buttons">color</div>
              <div role="group" aria-labelledby="radio-buttons">
                {noteBGColors.map((color) => {
                  return (
                    <label key={color} style={{ backgroundColor: color }}>
                      <Field
                        type="radio"
                        name="color"
                        value={color}
                        style={{
                          appearance: "none",
                          width: "15px",
                        }}
                      />
                    </label>
                  );
                })}
                <TextInput
                  name="content"
                  type="text"
                  style={{ backgroundColor: values.color }}
                />
                <button type="submit">add</button>
              </div>
            </Form>
          )}
        </Formik>
      </ToolbarContainer>
      <Notes notes={note} />
    </>
  );
}

export default Toolbar;
