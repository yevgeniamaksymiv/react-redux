import React, { Component } from "react";

import store from "./store";
import { addNewPost } from "./actions";


export default class NewPostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            selectedAuthor: null,
            authors: store.getState().authors
        };
    }

    onSelectedAuthorChanged = (e) => {
        const { value } = e.target;
        this.setState({ selectedAuthor: value || null })
    }

    onPostTitleChanged = (e) => {
        const { value } = e.target;
        this.setState({ title: value });
    }

    onAddNewPostClicked = () => {
        if ((this.state.selectedAuthor) && (this.state.title !== "")) {
            store.dispatch(addNewPost(this.state.selectedAuthor, this.state.title));
            this.setState({ title: "" });
        };
    }

    render() {
        const { title, selectedAuthor, authors } = this.state;


        const authorsOptions = authors.map(author => <option key={author.authorId} value={author.authorId}>{author.name}</option>);
        // Add an empty selection option
        authorsOptions.unshift(<option key="empty" value="" />);

        return (
            <div>
                <h4>New Post</h4>
                <input type="text" onChange={this.onPostTitleChanged} value={title} />
                <div>Author: <select data-testid="author-select" value={selectedAuthor || ''} onChange={this.onSelectedAuthorChanged}>{authorsOptions}</select></div>
                <div><button data-testid="post-submit" onClick={this.onAddNewPostClicked}>Add New Post</button></div>
            </div>
        )
    }
}
