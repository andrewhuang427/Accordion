import * as React from "react";
import { useState } from "react";
import AccordionContext from "./AccordionContext";
import Transition from "./Transition";

export default function Accordion({
  children: childrenProp,
  disabled = false,
}) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!expanded);
  };

  const contextState = {
    expanded,
    disabled,
    toggle,
  };

  const [summary, ...children] = React.Children.toArray(childrenProp);

  return (
    <div>
      <AccordionContext.Provider value={contextState}>
        {summary}
        <Transition expanded={expanded}>{children}</Transition>
      </AccordionContext.Provider>
    </div>
  );
}
