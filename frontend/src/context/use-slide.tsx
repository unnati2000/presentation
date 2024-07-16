import { createContext, ReactNode, useContext, useState } from "react";

interface SlideContextType {
  slides: ReactNode[];
  setSlides: (slides: ReactNode[]) => void;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

export const SlideContext = createContext<SlideContextType>({
  slides: [],
  setSlides: () => {},
  currentSlide: 0,
  setCurrentSlide: () => {},
});

export const SlideProvider = ({ children }: { children: ReactNode }) => {
  const [slides, setSlides] = useState<ReactNode[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <SlideContext.Provider
      value={{ slides, setSlides, currentSlide, setCurrentSlide }}
    >
      {children}
    </SlideContext.Provider>
  );
};

export const useSlide = () => {
  return useContext(SlideContext);
};
