import { Container, Main, Content, Panel, Layout } from "./App.styled";

import Slides from "./components/slides/Slides.component";
import Navbar from "./components/navbar/Navbar.component";
import MainSlide from "./components/main-slide/MainSlide.component";

function App() {
  return (
    <Container>
      <Navbar />
      <Main>
        <Panel></Panel>
        <Layout>
          <Content>
            <MainSlide />
          </Content>
          <Slides />
        </Layout>
      </Main>
    </Container>
  );
}

export default App;
