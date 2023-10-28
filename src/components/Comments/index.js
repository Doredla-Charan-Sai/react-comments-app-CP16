import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

// console.log(formatDistanceToNow(new Date()))

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  onTypeName = event => {
    this.setState({name: event.target.value})
  }

  onTypeComment = event => {
    this.setState({comment: event.target.value})
  }

  onRemove = uniqueId => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(item => item.id !== uniqueId),
    }))
  }

  onAdd = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name !== '' && comment !== '') {
      this.setState(prevState => ({
        commentsList: [
          ...prevState.commentsList,
          {id: uuidv4(), name, comment, isLiked: false},
        ],
        name: '',
        comment: '',
      }))
    }
  }

  onLike = uniqueId => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === uniqueId) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          <h1 className="main-head">Comments</h1>

          <div className="cont">
            <form onSubmit={this.onAdd} className="form">
              <p className="comment">Say something about 4.0 technologies</p>
              <input
                value={name}
                type="text"
                placeholder="Your Name"
                onChange={this.onTypeName}
              />
              <textarea
                value={comment}
                rows="10"
                cols="20"
                placeholder="Your Comment"
                onChange={this.onTypeComment}
              />
              <button type="submit" className="btn-add">
                Add Comment
              </button>
            </form>
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div className="lower-cont">
          <p className="count-para">
            <span className="length-cont">{commentsList.length}</span> Comments
          </p>
          <ul className="list-cont">
            {commentsList.map(eachItem => (
              <CommentItem
                className={
                  initialContainerBackgroundClassNames[
                    Math.ceil(
                      Math.random() *
                        initialContainerBackgroundClassNames.length,
                    )
                  ]
                }
                details={eachItem}
                key={eachItem.id}
                onDelete={this.onRemove}
                onLike={this.onLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
