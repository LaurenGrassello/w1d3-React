import React from 'react';
import './App.css';
import PersonCardComponent from './components/PersonCardComponent';

function App() {
  return (
    <div className="App">
      <PersonCardComponent propFirstName1={"Jane"} propLastName1={"Doe,"}/>
      <PersonCardComponent propAge1={"Age: 45 "} />
      <PersonCardComponent propHairColor1={"Hair Color: Black "} />

      <PersonCardComponent propFirstName2={"John"} propLastName2={"Smith,"}/>
      <PersonCardComponent propAge2={"Age: 88 "} />
      <PersonCardComponent propHairColor2={"Hair Color: Brown "} />

      <PersonCardComponent propFirstName3={"Millard"} propLastName3={"Fillmore,"}/>
      <PersonCardComponent propAge3={"Age: 50 "} />
      <PersonCardComponent propHairColor3={"Hair Color: Brown "} />

      <PersonCardComponent propFirstName4={"Maria"} propLastName4={"Smith,"}/>
      <PersonCardComponent propAge4={"Age: 62 "} />
      <PersonCardComponent propHairColor4={"Hair Color: Brown "} />
    </div>
  );
}

export default App;
