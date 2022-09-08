import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import AccordionContent from "./components/Accordion/AccordionContent";
import AccordionHeader from "./components/Accordion/AccordionHeader";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Accordion>
          <AccordionHeader>Header</AccordionHeader>
          <AccordionContent>
            <div>
              <div>Hello</div>
              <div>World</div>
            </div>
          </AccordionContent>
        </Accordion>
        <Accordion>
          <AccordionHeader>Header</AccordionHeader>
          <AccordionContent>
            <div>
              <div>Hello</div>
              <div>World</div>
            </div>
          </AccordionContent>
        </Accordion>
        <Accordion>
          <AccordionHeader>Header</AccordionHeader>
          <AccordionContent>
            <div>
              <div>Hello</div>
              <div>World</div>
            </div>
          </AccordionContent>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
