import React, { Component } from 'react'

class PersonCard extends Component {

  render(){

    const {index, firstName, lastName, age, hairColor, people, setPeople} = this.props

    const handleClick = e => {
      const currentAge = parseInt(people[index].age)
      const newAge = currentAge + 1
      const newPeople = [...people]
      newPeople[index].age = newAge
      setPeople(newPeople)
    }

    return  (
      <>
        <dt>{lastName}, {firstName}</dt>
        <dd>Age: {age}</dd>
        <dd>hair Color: {hairColor}</dd>
        <button onClick={handleClick}>Birthday Button for {firstName}, {lastName}</button>
      </>
    )
  }

}

export default PersonCard