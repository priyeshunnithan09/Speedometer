import {Component} from 'react'
class Speedometer extends Component {
  state = {count: 0}
  accelerate = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }
  break = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="speedometer-bg=con">
        <div>
          <h1 className="speedometer-heading">SPEEDOMETER</h1>
          <img
            className="speedometer-img"
            src="https://assets.ccbp.in/frontend/content/react-js/speedometer-ouput.gif"
            alt="speedometer"
          />
          <h2 className="speedometer-warning">
            Speed is <span>{count}mph</span>
          </h2>
          <p className="speedometer-warning">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
        </div>
        <button
          type="button"
          className="btn-accelerate"
          onClick={this.accelerate}
        >
          Accelerate
        </button>
        <button type="button" className="btn-break" onClick={this.break}>Apply Break</button>
      </div>
    )
  }
}
export default Speedometer
