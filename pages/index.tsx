import React from 'react';
import { connect } from 'react-redux';
import {
  decrementCounter,
  incrementCounter
} from '../redux/actions/counterActions';

class App extends React.Component {
  static getInitialProps({ store }: { store: any }) {}

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={(this.props as any).incrementCounter}>
          Increment
        </button>
        <button onClick={(this.props as any).decrementCounter}>
          Decrement
        </button>
        <h1>{(this.props as any).counter}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
