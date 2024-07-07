import { Container, Main, Navbar, Content, Panel, Slides } from "./App.styled";

function App() {
  return (
    <Container>
      <Navbar />
      <Main>
        <Panel></Panel>
        <Content></Content>
      </Main>
      <Slides></Slides>
    </Container>
  );
}

export default App;

