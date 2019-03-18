import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

import Header from './components/Header';
import Form from './components/Form';
import RepoList from './components/RepoList';

class App extends Component {
  state = {
    user: '',
    error: '',
    repos: [],
    loading: false
  }

  searchUser = async () => {
    const { user } = this.state;
    this.setState({ loading: true })

    try {
      const { data:repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
        );

      console.log(repos)

      this.setState({ repos, error: '', loading: false });

    } catch(err) {
        this.setState({
          error: 'Usuário não encontrado!',
          repos: [],
          loading: false
        })
    }
  }

  ChangeUser = user => {
    this.setState({ user });
  }

  render() {
    const { user, error, repos, loading } = this.state; 
    return (
          <div className="App">
              <Header />
              <Form 
                ChangeUser={this.ChangeUser}
                user={user}
                error={error}
                loading={loading}
                buttonAction={this.searchUser}
              />
              <RepoList repos={repos} />
          </div>
      );
  }
}

export default App;
