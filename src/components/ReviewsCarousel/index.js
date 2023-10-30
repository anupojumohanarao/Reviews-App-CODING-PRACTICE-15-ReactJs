// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {mainActiveIndex: 0}

  onClickRightArrow = () => {
    const {mainActiveIndex} = this.state
    const {reviewsList} = this.props

    if (mainActiveIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        mainActiveIndex: prevState.mainActiveIndex + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {mainActiveIndex} = this.state

    if (mainActiveIndex > 0) {
      this.setState(prevState => ({
        mainActiveIndex: prevState.mainActiveIndex - 1,
      }))
    }
  }

  renderActive = mainReview => {
    const {imgUrl, username, companyName, description} = mainReview

    return (
      <div className="detailed-container">
        <img src={imgUrl} alt={username} />
        <p className="personName">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="main-description">{description}</p>
      </div>
    )
  }

  render() {
    const {mainActiveIndex} = this.state
    const {reviewsList} = this.props
    const presentReviewDetails = reviewsList[mainActiveIndex]

    return (
      <div className="main-bg-container">
        <div className="main-container">
          <h1 className="main-heading">Reviews</h1>
          <div className="main-buttons-container">
            <button
              type="button"
              className="arrow-buttons"
              onClick={this.onClickLeftArrow}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="left-arrow-icon"
              />
            </button>
            {this.renderActive(presentReviewDetails)}
            <button
              type="button"
              className="arrow-buttons"
              onClick={this.onClickRightArrow}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="right-arrow-icon"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
