import React, { useState, useEffect, useContext } from 'react';
import CommentList from '../Components/CommentList';
import { useParams } from 'react-router-dom';

const COMMENTS = [
    {
        commentID: 'c1',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg',
        description: 'One of the most famous sky scrapers in the world!One of the most famous sky scrapers in the world!One of the most famous sky scrapers in the world!One of the most famous sky scrapers in the world!One of the most famous sky scrapers in the world!One of the most famous sky scrapers in the world!One of the most famous sky scrapers in the world!',
        post: '1a5f853b-a958-46d4-a8e1-902899dffb64',
        creatorName:'Uros Milic',
        creator: 'u1',

    },
    {
        commentID: 'c2',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg',
        description: 'One of the most famous sky scrapers in the world!',
        post: '1a5f853b-a958-46d4-a8e1-902899dffb64',
        creatorName:'Uros Milic',
        creator: 'u1',

    }
];



const PostComments = () => {

    const postID = useParams().postId;
    console.log(postID + " ovo je postID")

    const loadedComments = COMMENTS.filter(comment => comment.post === postID);
    console.log(loadedComments);

    return (
        <CommentList items={loadedComments} />
    );
};

export default PostComments;