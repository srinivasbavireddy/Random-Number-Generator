import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  onGenerate = () => {
    this.setState({number: Math.floor(Math.random() * 101)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="title">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
