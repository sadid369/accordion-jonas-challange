function Accordion({ item, itemNumber, currOpen, onOpen }) {
  const isOpen = itemNumber === currOpen;
  return (
    <div
      className={`item  ${isOpen === true ? "open" : ""}`}
      onClick={() => {
        onOpen(isOpen ? null : itemNumber);
      }}
    >
      <p className={`number  `}>
        {itemNumber < 9 ? "0" : ""}
        {itemNumber}
      </p>
      <p className={`title`}>{item.title} </p>
      <p className={`icon`}> {isOpen === true ? "-" : "+"}</p>
      {isOpen === true && <p className={`content-box`}>{item.text}</p>}
    </div>
  );
}

export default Accordion;
