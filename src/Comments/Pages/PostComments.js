import React, { useState, useEffect, useContext } from 'react';
import CommentList from '../Components/CommentList';
import { useParams } from 'react-router-dom';

const COMMENTS = [
    {
        commentID: 'c1',
        image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
         description: 'One of the most famous sky scrapers in the world!',
         post:'1a5f853b-a958-46d4-a8e1-902899dffb64',
        creator: 'u1',
  
    },
    {
        commentID: 'c2',
        image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        description: 'One of the most famous sky scrapers in the world!',
         post:'1a5f853b-a958-46d4-a8e1-902899dffb64',
        creator: 'u1',
  
    }
  ];
  


  const PostComments = () => {

    const postID = useParams().postId;
    console.log(postID + " ovo je postID")

    const loadedComments = COMMENTS.filter(comment => comment.post === postID);
    
    
    return (
    <CommentList items={loadedComments} />
        );
  };
  
  export default PostComments;