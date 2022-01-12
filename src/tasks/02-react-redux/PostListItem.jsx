import React from "react";

const PostListItem = ({ title, name }) => {
    return (
        <li>{title}, by {name}</li>
    );
};

export default PostListItem;