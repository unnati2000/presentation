import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;

export const Navbar = styled.div`
  display: flex;
  height: 80px;
  border: solid 1px pink;
  width: 100%;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  width: 100%;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Panel = styled.div`
  border: solid 1px green;
  height: 100%;

  /* min-width: 100px; */
  /* min-width:; */
`;

export const Content = styled.div`
  border: solid 1px red;
  height: 100%;
`;

export const Slides = styled.div`
  border: solid 1px blue;
  min-height: 100px;
  width: 100%;
`;

