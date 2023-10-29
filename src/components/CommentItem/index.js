// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {className, details, onDelete, onLike} = props
  const {id, name, comment, isLiked} = details
  const time = formatDistanceToNow(new Date())
  const likeBtn = isLiked ? 'btn' : 'like-btn'
  const onTake = () => {
    onLike(id)
  }
  const onDeleteBtn = () => {
    onDelete(id)
  }
  return (
    <li className="comment-cont">
      <div className="upper">
        <div className={`icon ${className}`}>
          <h1 className="letter">{name[0]}</h1>
        </div>
        <div className="cont-item">
          <div className="name-time">
            <h1 className="name">{name}</h1>
            <p className="time">{time}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="lower">
        <div className="like-cont">
          <button className={`${likeBtn}`} type="button" onClick={onTake}>
            {isLiked === false && (
              <img
                className="like"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="like"
              />
            )}
            {isLiked === true && (
              <img
                className="like"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="liked"
              />
            )}{' '}
            Like
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={onDeleteBtn}
            data-testid="delete"
          >
            <img
              className="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default CommentItem
