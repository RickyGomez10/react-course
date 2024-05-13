import "./index.css";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

const COMPONENTS = 'Components';
const JSX = 'JSX';
const STATE = 'State';
const PROPS = 'Props';

function App() {
  //HOOK, useState sets an initial value, then, the function in the second parameter of the array destructuring updates the value on the first element of the array
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
             CORE_CONCEPTS.map((conceptItem)=>(
              <CoreConcept key={conceptItem.title} {...conceptItem} />
             ))
            /* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */
            
            }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === COMPONENTS} onSelect={() => handleSelect(COMPONENTS) }>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === JSX} onSelect={() => handleSelect(JSX)}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === PROPS} onSelect={() => handleSelect(PROPS)}>Props</TabButton>
            <TabButton isSelected={selectedTopic === STATE} onSelect={() => handleSelect(STATE)}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
