import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  changeNumber = () => {
    const getRandom = Math.ceil(Math.random() * 100)

    this.setState({count: getRandom})
  }

  render() {
    const {count} = this.state
    return (
      <>
        <div className="bgContainer">
          <div className="card">
            <h1 className="heading">Random Number</h1>
            <p className="para">
              Generate a random number in the range of 0 to 100
            </p>
            <div>
              <button type="button" className="btn" onClick={this.changeNumber}>
                Generate
              </button>
            </div>
            <p className="countValue">{count}</p>
          </div>
        </div>
      </>
    )
  }
}
export default RandomNumberGenerator
