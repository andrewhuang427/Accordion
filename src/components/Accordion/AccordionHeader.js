import { useContext } from "react";
import AccordionContext from "./AccordionContext";
import "./AccordionHeader.css";

export default function AccordionHeader({ children }) {
  const { expanded, toggle } = useContext(AccordionContext);

  const handleClick = () => {
    console.log("clicked");
    toggle();
  };

  return (
    <div className="header-content">
      <div className="header-content-content">{children}</div>
      <button onClick={handleClick}>{expanded ? "Close" : "Open"} </button>
    </div>
  );
}
