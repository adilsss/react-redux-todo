import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTask, removeTask } from '../../store/actions/tasksActions';
import { Button, Checkbox } from '@material-ui/core';
import style from './Task.module.css';

class Task extends Component {
  handleDeleteButton = id => {
    this.props.removeTask(id);
  };

  render() {
    return (
      <div className={style['task-container']}>
        <div className={style.task}>
          <Checkbox
            color='default'
            defaultChecked={this.props.isCompleted}
            onChange={() => this.props.toggleTask(this.props.id)}
          />
          <span className={this.props.isCompleted ? style.done : ''}>
            {this.props.text}
          </span>
          <Button
            className={style['btn-delete']}
            variant='contained'
            color='secondary'
            onClick={() => this.handleDeleteButton(this.props.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTask: id => dispatch(toggleTask(id)),
    removeTask: id => dispatch(removeTask(id))
  };
};

export default connect(null, mapDispatchToProps)(Task);
