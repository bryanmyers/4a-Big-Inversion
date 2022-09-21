import React, { Component } from 'react'

class PersonCard extends Component {

  render(){

    const {firstName, lastName, age, hairColor} = this.props

    return  (
      <>
        <dt>{lastName}, {firstName}</dt>
        <dd>Age: {age}</dd>
        <dd>hair Color: {hairColor}</dd>
      </>
    )
  }

}

export default PersonCard