import { NoteFrame } from "../styled-components/notes/NoteFrame";

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
    <>
      {notes.length !== 0 &&
        notes.map((note) => (
          <NoteFrame key={note.id} $inputBGColor={note.values.color}>
            {note.values.content}
          </NoteFrame>
        ))}
    </>
  );
}

export default Notes;
