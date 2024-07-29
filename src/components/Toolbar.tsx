import Notes from "./Notes";
import { ToolbarContainer } from "../styled-components/toolbar/ToolbarContainer";
import { AddButton } from "../styled-components/toolbar/S.Button";
import { useState } from "react";

import { Formik, Form, Field, useField } from "formik";
import * as Yup from "yup";

interface NoteValues {
  id: number;
  content: string;
}

const TextInput = ({
  label,
  ...props
}: {
  [x: string]: string;
  name: string;
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// interface Values extends Array<NoteValues> {}
let nextId = 0;
const noteBGColors = ["#d6ffe9", "#bbc2e2", "#de6c83", "#7b72ac", "#fbd589"];
function Toolbar() {
  //use [] after interface name instead of extend function
  const [note, setNote] = useState<NoteValues[]>([]);
  function handleClick() {
    setNote([...note, { id: nextId++, content: "Hi" }]);
    console.log("Clicked");
  }
  return (
    <>
      <ToolbarContainer>
        <AddButton onClick={handleClick}>new</AddButton>
        {note.map((n) => (
          <p key={n.id}>{n.id}</p>
        ))}
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
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          {({ values }) => (
            <Form>
              <TextInput label="" name="content" type="text" />
              <div id="radio-buttons">Color</div>
              <div role="group" aria-labelledby="radio-buttons">
                {noteBGColors.map((color) => {
                  return (
                    <label key={color} style={{ backgroundColor: color }}>
                      <Field type="radio" name="color" value={color} />
                    </label>
                  );
                })}
                <div>{values.color}</div>
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
