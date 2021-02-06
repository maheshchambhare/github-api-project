import React, { Component } from "react";
import UserForm from "./components/UserForm";
import axios from "axios";
import "./app.css";

// https://api.github.com/users/leo-mahesh

export default class App extends Component {
  state = {
    avatar_url: null,
    login: null,
    name: null,
    bio: null,
    public_repos: null,
    html_url: null,
    following: null,
    followers: null,
    repoName: null,
    Name: null,
  };

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.user.value;
    axios.get(`https://api.github.com/users/${user}`).then((res) => {
      const avatar_url = res.data.avatar_url;
      const login = res.data.login;
      const name = res.data.name;
      const followers = res.data.followers;
      const following = res.data.following;
      const html_url = res.data.html_url;
      const public_repos = res.data.public_repos;
      const bio = res.data.bio;
      // console.log(res);
      // console.log(avatar_url);
      this.setState({
        name,
        login,
        avatar_url,
        followers,
        following,
        html_url,
        public_repos,
        bio,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="heading">Github Users</h1>
        <UserForm getUser={this.getUser} />
        {this.state.name ? (
          <div className="main-container">
            <img className="avatar" src={this.state.avatar_url} alt="avatar" />
            <section className="info">
              <h1>UserName : {this.state.login}</h1>
              <h1 className="name">Name :{this.state.name}</h1>

              <p>Bio : {this.state.bio}</p>
              <button className="pr">
                Public Repos {this.state.public_repos}
              </button>
              <button className="pr">Followers {this.state.followers}</button>
              <button className="pr">following {this.state.following}</button>
              <a href={this.state.html_url}>
                <button className="Follow">follow</button>
              </a>
            </section>
          </div>
        ) : (
          <p>please enter name</p>
        )}
      </div>
    );
  }
}
