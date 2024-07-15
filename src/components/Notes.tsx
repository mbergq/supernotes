interface Values {
  id: number;
  content: string;
}

interface Props {
  notes: Values[];
}

function Notes({ notes }: Props) {
  console.log(notes);
  return (
    <>
      <h2>Hi</h2>
    </>
  );
}

export default Notes;
