import './App.css';
import PersonCard from './components/PersonCard'

const people = [
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
    age: 15,
    hairColor: 'Dark Brown'
  }
]

const peopleList = people.map((person, index) => <PersonCard key={index} firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>)

function App() {
  return (
    <dl>
      {peopleList}
    </dl>
  );
}

export default App;