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
  height: 40px;
  border: solid 1px pink;
  width: 100%;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
  height: 100%;
  border: solid 1px red;
`;

export const Panel = styled.div`
  border: solid 1px green;
  height: 100%;
  /* min-width:; */
`;

export const Content = styled.div`
  border: solid 1px red;
`;

export const Slides = styled.div`
  border: solid 1px yellow;
  min-height: 100px;
  width: 100%;
`;

