import { useState } from "react";

function Accordion({ item, itemNumber }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className={`item  ${isClicked === true ? "open" : ""}`}
      onClick={() => {
        setIsClicked((isClicked) => !isClicked);
      }}
    >
      <p className={`number  `}>
        {itemNumber < 9 ? "0" : ""}
        {itemNumber}
      </p>
      <p className={`title`}>{item.title} </p>
      <p className={`icon`}> {isClicked === true ? "-" : "+"}</p>
      {isClicked && <p className={`content-box`}>{item.text}</p>}
    </div>
  );
}

export default Accordion;
