import Toolbar from "./components/Toolbar";
import { StatusBar } from "./styled-components/statusbar/StatusBar";
import { Layout } from "./styled-components/Layout";

function App() {
  return (
    <>
      <StatusBar />
      <Layout>
        <Toolbar />
      </Layout>
    </>
  );
}

export default App;
