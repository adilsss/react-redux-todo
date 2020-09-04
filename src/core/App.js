import React, { Component } from 'react';
import { connect } from 'react-redux';
import Control from '../components/Control/Control';
import List from '../components/List/List';
import style from './App.module.css';

class App extends Component {
  state = {
    filterType: 'all'
  };

  handleFilterType = type => {
    this.setState({
      filterType: type
    });
  };

  render() {
    const { tasks } = this.props;
    return (
      <div className={style.container}>
        <Control handleFilterType={this.handleFilterType} />
        <List tasks={tasks} filterType={this.state.filterType} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    tasks: store.tasks.tasks
  };
};

export default connect(mapStateToProps)(App);
