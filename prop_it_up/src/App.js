// import React from 'react';
// import './App.css';
// import PersonCardComponent from './components/PersonCardComponent';
// import BirthdayButtonComponent from './components/BirthdayButtonComponent';

// function App() {
//   return (
//     <div className="App">
//       <PersonCardComponent propFirstName1={"Jane"} propLastName1={"Doe,"}/>
//       <PersonCardComponent propAge1={"45 "} />
//       <PersonCardComponent propHairColor1={"Hair Color: Black "} />

//       <PersonCardComponent propFirstName2={"John"} propLastName2={"Smith,"}/>
//       <PersonCardComponent propAge2={"88 "} />
//       <PersonCardComponent propHairColor2={"Hair Color: Brown "} />

//       <PersonCardComponent propFirstName3={"Millard"} propLastName3={"Fillmore,"}/>
//       <PersonCardComponent propAge3={"50 "} />
//       <PersonCardComponent propHairColor3={"Hair Color: Brown "} />

//       <PersonCardComponent propFirstName4={"Maria"} propLastName4={"Smith,"}/>
//       <PersonCardComponent propAge4={"62 "} />
//       <PersonCardComponent propHairColor4={"Hair Color: Brown "} />
//     </div>
//   );
// }

// export default App;




// platform solution

import React from 'react';
import './App.css';
import PersonCardComponent from './components/PersonCardComponent';


let cardPeople =[
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
  {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
]

function App() {
  return (
    <div className="App">
    
    {cardPeople.map(person => {
      return <PersonCardComponent firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
    })
      
      }

    </div>
  );
}

export default App;