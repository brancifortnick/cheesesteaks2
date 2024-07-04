import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateComment } from '../store/actions/commentActions';



const EditBody = ({ comment, setEditing }) => {
    const dispatch = useDispatch();
    const [editedComment, setEditedComment] = useState(comment.comment);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editedComment) return;
        if (editedComment === comment.comment) return;
        if (editedComment[editedComment.length - 1] !== comment.comment) {
            comment.comment = editedComment;
        }
        dispatch(updateComment(comment.id, { comment: editedComment }));
        setEditing(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
            />
            <button type="submit">Update</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
    );
}
export default EditBody;
