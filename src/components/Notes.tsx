import Note from "./Note";

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
        notes.map((n) => <Note key={n.id} data={n.values} />)}
    </>
  );
}

export default Notes;
