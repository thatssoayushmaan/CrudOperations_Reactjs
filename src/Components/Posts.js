import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Comments from "./Comments";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const VIEW_URL = "https://jsonplaceholder.typicode.com/comments";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      id: "",
      userId: "",
      title: "",
      body: "",
      redirect1: false,
      redirect2: false,
      comments: [],
      users: []
    };
  }

  componentDidMount() {
    this.getPosts();
    // this.getUsers();
  }
  //CREATE
  createPosts = async () => {
    const { userId, title, body } = this.state;
    const { data } = await axios.post(API_URL, {
      userId,
      title,
      body
    });
    //console.log(data);
    let posts = [...this.state.posts];
    posts.push(data);
    this.setState({ posts, userId: "", body: "", title: "" });
  };

  //DELETE
  deletePost = async (postId) => {
    await axios.delete(`${API_URL}/${postId}`);
    let posts = [...this.state.posts];
    posts = posts.filter((post) => post.id !== postId);
    this.setState({ posts });
  };

  //UPDATE
  // updatePosts = async () => {
  //   const { id, userId, title, body } = this.state;
  //   const { data } = await axios.put(`${API_URL}/${this.state.id}`, {
  //     userId,
  //     title,
  //     body
  //   });
  //   const posts = [...this.state.posts];
  //   const postIndex = posts.findIndex((post) => post.id === id);
  //   posts[postIndex] = data;
  //   this.setState({ posts, userId: "", body: "", title: "" });
  // };

  //READ
  getPosts = async () => {
    const { data } = await axios.get(API_URL);
    this.setState({ posts: data });
  };

  // getUsers = async () => {
  //   const { data } = await axios.get(
  //     "http://jsonplaceholder.typicode.com/users"
  //   );
  //   console.log(data);
  //   this.setState({ users: data });
  // };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.id) {
      this.updatePosts();
    } else this.createPosts();
  };

  selectPost = (post) => {
    this.setState({ ...post, redirect2: true });
  };

  //viewComments
  //Not able to Console the comments
  viewComments = async (postId) => {
    const { data } = await axios.get(`${VIEW_URL}/${postId}`);
    //     alert(`PostId : ${data.postId}
    // ID : ${data.id}
    // Name : ${data.name}
    // Email : ${data.email}
    // Body : ${data.body}`);
    this.setState({ redirect1: true, comments: { data } });

    //console.log(data);
  };

  render() {
    return (
      <div className="App">
        <h1>BlogPosts</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserId : </label>
            <input
              type="text"
              name="userId"
              value={this.state.userId}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Title : </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Body : </label>
            <textarea
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              rows="5"
              columns="100"
              required
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>UserId</td>
              <td>Title</td>
              <td>Body</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.selectPost(post);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        this.deletePost(post.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        this.viewComments(post.id);
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.redirect1 ? (
          <Redirect
            to={{
              pathname: "/comments",
              state: { data: this.state.comments }
            }}
          />
        ) : (
          ""
        )}
        {/* {
          <Redirect
            to={{ pathname: "/users", state: { data: this.state.users } }}
          />
        } */}
        {this.state.redirect2 ? (
          <Redirect
            to={{
              pathname: "/form",
              state: {
                id: this.state.id,
                body: this.state.body,
                userId: this.state.userId,
                title: this.state.title
              }
            }}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
