import './App.css';
import PersonCard from './components/PersonCard'
import {  useState } from 'react'

const data = [
  {
    firstName: 'Bryan',
    lastName: 'Myers',
    age: 50,
    hairColor: 'Dark Brown'
  },
  {
    firstName: 'Michelle',
    lastName: 'Myers',
    age: 50,
    hairColor: 'Blonde'
  },
  {
    firstName: 'Alexandria',
    lastName: 'Myers',
    age: 15,
    hairColor: 'Dark Brown'
  },
  {
    firstName: 'Mikala',
    lastName: 'Myers',
    age: 11,
    hairColor: 'Dark Brown'
  }
]



function App() {

  const [people, setPeople] = useState(data)

  const peopleList = people.map((person, index) => 
    <PersonCard
      key={index}
      firstName={person.firstName}
      lastName={person.lastName}
      age={person.age}
      hairColor={person.hairColor}
      people={people}
      setPeople={setPeople}
      index={index}
    />
  )
  

  return (
    <dl>
      {peopleList}
    </dl>
  );
}

export default App;