import Notes from "./Notes";
import { ToolbarContainer } from "../styled-components/toolbar/ToolbarContainer";
import { AddButton } from "../styled-components/toolbar/S.Button";
import { useState } from "react";

interface NoteValues {
  id: number;
  content: string;
}
// interface Values extends Array<NoteValues> {}

let nextId = 0;
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
      </ToolbarContainer>
      <Notes notes={note} />
    </>
  );
}

export default Toolbar;
