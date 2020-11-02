import React from 'react';
import './index.css'
import DogBar from './containers/DogBar';
import DogContainer from './containers/DogContainer'

export class App extends React.Component {

  state = ({
    dogs: [],
    show: []
  })

  componentDidMount = () => {
    fetch("http://localhost:3001/pups")
    .then(resp => resp.json())
    .then(dogs => {
      this.setState({
        dogs: dogs
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div id="filter-div">
          <button id="good-dog-filter">Filter good dogs: OFF</button>
        </div>
        <div>
          <DogBar dogs={this.state.dogs}/>
        </div>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <div id="dog-info">
          <DogContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default App

