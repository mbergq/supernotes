interface Values {
  id: number;
  content: string;
}

interface Props {
  notes: Values[];
}

function Notes({ notes }: Props) {
  // console.log(notes);
  return (
    <>
      <h2>Hi</h2>
      {notes.length !== 0 &&
        notes.map((note) => <div key={note.id}>{note.content}</div>)}
    </>
  );
}

export default Notes;
