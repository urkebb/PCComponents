import React from 'react';
import CommentItem from './CommentItem';
import Card from '../../Shared/Components/UIElements/Card';
import './CommentList.css';


const CommentList = props => {
    if (props.items.length === 0) {
      return (
        <div className="comment-list center">
          <Card className="card-c">
            <h2>Ne postoje komentari za ovaj post</h2>
          </Card>
        </div>
      );
    }

    return (
        <ul className="comment-list">
          {props.items.map(comment => (
            <CommentItem
              key={comment.commentID}
              id={comment.commentID}
              creatorImage={comment.image}
              description={comment.description}
              postID={comment.post}
              creatorId={comment.creator}
              onDelete={props.onDeletePost}
            />
          ))}
        </ul>
      );
    };
    
    export default CommentList;