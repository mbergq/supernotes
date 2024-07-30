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
        notes.map((note) => <div key={note.id}>{note.values.content}</div>)}
    </>
  );
}

export default Notes;
