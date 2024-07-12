import { ToolbarContainer } from "../styled-components/toolbar/ToolbarContainer";
import { AddButton } from "../styled-components/toolbar/S.Button";

function Toolbar() {
  function handleClick() {
    console.log("Clicked");
  }
  return (
    <>
      <ToolbarContainer>
        <AddButton onClick={handleClick}>new</AddButton>
      </ToolbarContainer>
    </>
  );
}

export default Toolbar;
