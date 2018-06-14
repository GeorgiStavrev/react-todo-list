import React, { Component } from 'react';
import { connect } from 'react-redux'
import Title from './Title'
import Input from './Input'
import List from './List'
import { actionCreators } from './todoListRedux';

const mapStateToProps = (state) => ({
  showAll: state.showAll,
  todos: state.todos
})

class App extends React.Component {
  onAddTodo = (text) => {
    const { dispatch } = this.props
    dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.remove(index))
  }

  onSwitchOption = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.switchOption(index))
  }

  onCompleteTodo = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.complete(index))
  }

  onShowAll = () => {
    const { dispatch } = this.props
    dispatch(actionCreators.showAll())
  }

  render() {
    let { todos, showAll } = this.props
    todos = todos.filter(item => item && !item.completed || showAll)
    return (
      <div style={styles.container}>
        <Title onClickButton={this.onShowAll} allShown={showAll}>
          To-Do List
        </Title>
        <Input 
          placeholder={'Type a new todo'}
          onSubmitEditing={this.onAddTodo}/>
        <List
          items={todos} 
          onClickItem={this.onCompleteTodo}
          onClickItemOption1={this.onRemoveTodo}
          onClickItemOption2={this.onSwitchOption}/>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "helvetica"
  }
}

export default connect(mapStateToProps)(App)
