import React, { Component } from "react";
import { connect } from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import PostListItem from "./PostListItem";

export class PostsList extends Component {
    render() {
        const {posts = [], authors = []} = this.props;

        const renderedPosts = posts.map(post => {
            const author = authors.find(author => author.authorId === post.authorId) || {name : "Unknown"};
            const {name} = author;
            return (
                <PostListItem key={post.id} title={post.title} name={name}/>
            );
        });

        return (
            <div>
                <h4>Posts</h4>
                <ul>
                    {renderedPosts}
                </ul>
            </div>
        );
    }
}
 
const mapState = (state) => {
    return {
        posts: state.posts,
        authors: state.authors
    }
}

export default connect(mapState)(PostsList);
