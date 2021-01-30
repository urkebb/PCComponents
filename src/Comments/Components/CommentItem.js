import React, { useState, useContext } from 'react';
import { useParams, useHistory, Route } from 'react-router-dom';
import { AuthContext } from '../../Shared/context/auth-context';
import Card from '../../Shared/Components/UIElements/Card';
import Button from '../../Shared/Components/FormElements/Button';
import './CommentItem.css';

const CommentItem = props => {

    const auth = useContext(AuthContext);


    return (
        <li className="comment-item">
            <Card className="comment-item__content">
                <div className="comment-item__image">
                    <img src={props.image} alt="MIKRI" />
                </div>
                <div className="comment-item__info">
                    <p>{props.description}</p>
                </div>
                <div className="comment-item__actions">
                    <div className="delete">
                        {auth.isLoggedIn && (<Button danger /*onClick={}*/>DELETE</Button>)}
                    </div>
                </div>
            </Card>
        </li>
    );
};

export default CommentItem; 