import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    let list = this.props.pets.map((pet) => {
      return <Pet key={pet.id} pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>
    })

    return <div className="ui cards">{list}</div>
  }
}

export default PetBrowser
