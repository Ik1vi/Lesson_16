import React from 'react';

import { connect } from 'react-redux';
import { addComment, removeComment } from '../actions/index.js';

import { CommentsList } from '../components/comments-list.js';
import { CommentForm } from '../components/comment-form.js';

import '../index.css';

export function App(props) {
    const {
        comments, addComment, removeComment
    } = props;

    return (
        <div className="body__app app">
            <CommentsList
                removeComment={removeComment}
                comments={comments}
            />
            <CommentForm
                addComment={addComment} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        comments: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (author, text, datetime) => dispatch(addComment(author, text, datetime)),
        removeComment: (id) => dispatch(removeComment(id))
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
