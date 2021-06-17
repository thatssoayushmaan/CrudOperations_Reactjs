import React from "react";

export default class Comments extends React.Component {
  render(props) {
    //console.log(this.props.location.state.data.data);
    const data = this.props.location.state.data.data;
    return (
      <div>
        <h2>Post Comments</h2>
        <table>
          <thead>
            <tr>
              <td>Post ID</td>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Body</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.postId}</td>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.body}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
