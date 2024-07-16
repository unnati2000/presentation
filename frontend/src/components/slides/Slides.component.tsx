import { Container } from "./Slides.styled";

import { Card } from "@mantine/core";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Slides = () => {
  const [numberOfSlides, setNumberOfSlides] = useState(0);

  return (
    <Container>
      {[...Array(numberOfSlides)].map((_, index) => (
        <Slide index={index} />
      ))}

      <Card
        styles={{
          root: {
            height: "80px",
            width: "120px",
            background: "transparent",
            border: "dashed 1px #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          },
        }}
        onClick={() => {
          setNumberOfSlides(numberOfSlides + 1);
        }}
      >
        <FaPlus size={28} />
      </Card>
    </Container>
  );
};

const Slide = ({ index }: { index: number }) => {
  return (
    <div
      key={index}
      style={{
        height: "80px",
        width: "120px",
        background: "#3d3b3b",
      }}
    ></div>
  );
};

export default Slides;

