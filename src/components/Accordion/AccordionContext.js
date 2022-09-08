import { createContext } from "react";

const AccordionContext = createContext({
  expanded: false,
  disabled: false,
  toggle: () => {},
});

export default AccordionContext;
