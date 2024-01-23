// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClick: false}

  onClickEmoji = () => {
    this.setState({isClick: true})
  }

  render() {
    const {isClick} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg">
        {!isClick && (
          <div className="card">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <div className="emojis">
              {emojis.map(eachEmoji => (
                <li key={eachEmoji.id} className="list">
                  <img
                    src={eachEmoji.imageUrl}
                    alt={eachEmoji.name}
                    height="40px"
                    width="40px"
                    onClick={this.onClickEmoji}
                  />
                  <p className="name">{eachEmoji.name}</p>
                </li>
              ))}
            </div>
          </div>
        )}
        {isClick && (
          <div className="feedback-card">
            <img
              src={loveEmojiUrl}
              alt="love emoji"
              height="30px"
              width="30px"
            />
            <h1 className="greet">Thank You!</h1>
            <p className="feedback">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
