// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSubmitted: false}

  toggleSubmission = () => {
    this.setState({isFeedbackSubmitted: true})
  }

  renderFeedbackPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-white">
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul className="list">
          {emojis.map(eachemoji => (
            <li key={eachemoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.toggleSubmission}
              >
                <img
                  alt={eachemoji.name}
                  src={eachemoji.imageUrl}
                  className="emoji"
                />
                <h1>{eachemoji.name}</h1>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackResponse = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-white">
        <img alt="love emoji" src={loveEmojiUrl} />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSubmitted} = this.state
    return (
      <div className="main-container">
        {isFeedbackSubmitted
          ? this.renderFeedbackResponse()
          : this.renderFeedbackPage()}
      </div>
    )
  }
}
export default Feedback
