import React, { Component } from 'react'

export class DogCard extends Component {
    render() {
        return (
            <div>
                {this.props.dog.name}
            </div>
        )
    }
}

export default DogCard
