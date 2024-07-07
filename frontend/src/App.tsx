import { Container, Main, Content, Panel, Slides, Layout } from "./App.styled";

import Navbar from "./components/navbar/Navbar.component";

function App() {
  return (
    <Container>
      <Navbar />
      <Main>
        <Panel></Panel>
        <Layout>
          <Content></Content>
          <Slides></Slides>
        </Layout>
      </Main>
    </Container>
  );
}

export default App;

