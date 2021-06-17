import React from "react";
//import axios from "axios";

// const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default class Form extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       posts: [],
  //       id: "",
  //       userId: "",
  //       title: "",
  //       body: ""
  //     };
  //   }
  //   //UPDATE
  //   handleChange = ({ target: { name, value } }) => {
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  //   handleSubmit = (evt) => {
  //     evt.preventDefault();
  //     if (this.state.id) {
  //       this.updatePosts();
  //     } else this.createPosts();
  //   };

  //   createPosts = async () => {
  //     const { userId, title, body } = this.state;
  //     const { data } = await axios.post(API_URL, {
  //       userId,
  //       title,
  //       body
  //     });
  //     //console.log(data);
  //     let posts = [...this.state.posts];
  //     posts.push(data);
  //     this.setState({ posts, userId: "", body: "", title: "" });
  //   };

  render(props) {
    const data = this.props.location.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserId : </label>
            <input
              type="text"
              name="userId"
              value={data.userId}
              //onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Title : </label>
            <input
              type="text"
              name="title"
              //value={this.state.title}
              //onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Body : </label>
            <input
              type="text"
              name="body"
              //value={this.state.body}
              //onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
