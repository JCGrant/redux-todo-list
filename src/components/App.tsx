import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { todoActions } from '../actions';
import TodoList from './TodoList';

interface DispatchProps {
  addTodo: (text: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch<{}>): DispatchProps => ({
  addTodo: (text: string) => dispatch(todoActions.addTodo(text)),
});

type AppProps = DispatchProps;

interface AppLocalState {
  inputValue: string;
}

class App extends React.Component<AppProps, AppLocalState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    this.setState((state) => ({
      inputValue,
    }));
  }

  onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.addTodo(this.state.inputValue);
      this.setState((state) => ({
        inputValue: '',
      }));
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.onChange} onKeyDown={this.onKeyDown} />
        <TodoList />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
