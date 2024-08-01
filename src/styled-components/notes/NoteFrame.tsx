import styled from "styled-components";

interface Props {
  $inputBGColor: string;
}

export const NoteFrame = styled.div<Props>`
  min-width: 256px;
  max-height: 220px;
  background-color: ${(props) => props.$inputBGColor};
`;
