import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../store/actions/tasksActions';
import { Button, Select, Input } from '@material-ui/core';
import style from './Control.module.css';

class Control extends Component {
  state = {
    inputValue: '',
    filterValue: 'all'
  };

  onInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleClick = () => {
    if (this.state.inputValue) {
      this.props.addTask(this.state.inputValue);
      this.setState({
        inputValue: ''
      });
    } else {
      return null;
    }
  };

  handleFilterType = (e) =>
    this.setState({ filterValue: e.target.value }, () =>
      this.props.handleFilterType(this.state.filterValue)
    );

  addTaskOnEnterKey = key => {
    if (key.keyCode === 13 && this.state.inputValue) {
      return this.handleClick();
    }
  };

  render() {
    return (
      <div className={style.control}>
        <Input
          className={style['control-input-field']}
          type='text'
          placeholder='Add some tasks...'
          value={this.state.inputValue}
          onChange={this.onInputChange}
          onKeyDown={this.addTaskOnEnterKey}
        />
        <Button variant='contained' color='primary' onClick={this.handleClick}>
          Add
        </Button>
        <Select
          className={style.select}
          defaultValue='all'
          onChange={this.handleFilterType}
        >
          <option value='all'>All</option>
          <option value='success'>Done</option>
          <option value='unsuccess'>Active</option>
        </Select>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task))
  };
};

export default connect(null, mapDispatchToProps)(Control);
