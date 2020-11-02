import React, { Component } from 'react'
import DogCard from '../components/DogCard'

export class DogBar extends Component {

    renderDogs = () => {
        let dogs = this.props.dogs
        return dogs.map(dog => <span><DogCard dog={dog}/></span>)
    }

    render() {
        return (
            <div id="dog-bar">
                {this.renderDogs()}
            </div>
        )
    }
}

export default DogBar
