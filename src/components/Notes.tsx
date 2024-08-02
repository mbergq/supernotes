import Note from "./Note";
import { NotesWrapper } from "../styled-components/notes/NotesGrid";

interface Values {
  id: number;
  values: { content: string; color: string };
}

interface Props {
  notes: Values[];
}

function Notes({ notes }: Props) {
  // console.log(notes);
  return (
    <NotesWrapper>
      {notes.length !== 0 &&
        notes.map((n) => <Note key={n.id} data={n.values} />)}
    </NotesWrapper>
  );
}

export default Notes;
