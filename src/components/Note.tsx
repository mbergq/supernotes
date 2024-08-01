import { NoteFrame } from "../styled-components/notes/NoteFrame";

interface Props {
  data: {
    content: string;
    color: string;
  };
}

function Note({ data }: Props) {
  return (
    <>
      <NoteFrame $inputBGColor={data.color}>
        <p>{data.content}</p>
      </NoteFrame>
    </>
  );
}

export default Note;
