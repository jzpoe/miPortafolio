import "./Carrusel.css";
import { useEffect, useRef, useState } from "react";
import { dataImg } from "../dataImg/DataImg";

const Carrusel = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNodes = listNode.querySelectorAll(".image-container");

    if (imgNodes.length > 0) {
      imgNodes.forEach((imgNode, index) => {
        if (index === currentIndex) {
          imgNode.classList.add("visible");
        } else {
          imgNode.classList.remove("visible");
        }
      });
    }
  }, [currentIndex]);

  const prevLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const prevRight = () => {
    if (currentIndex < dataImg.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="contenedor-carrusel">
      <div className="slider-container" ref={listRef}>
        <ul>
          {dataImg.map((item) => (
            <li key={item.id} className="image-container">
              <img src={item.imgUrl} alt={`Image ${item.id}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className="container-leftArrow-rightArrow">
        <button className="leftArrow" onClick={prevLeft}>
          prev
        </button>
        <button className="rightArrow" onClick={prevRight}>
          next
        </button>
      </div>
    </div>
  );
};

export default Carrusel;