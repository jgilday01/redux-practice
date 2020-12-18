import React from 'react';
import { connect } from 'react-redux';
import { activateTest, closeTest } from './redux';

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.test.title || 'Hello World!'}</h1>

        {this.props.test.title ? (
          <button onClick={this.props.closeTest}>Exit Foo</button>
        ) : (
            <button
              onClick={ () => this.props.activateTest({ title: "It's Foo Time!" }) }
            >
              Click Me!
            </button>
          )}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  test: state.test
});

const mapDispatchToProps = {
  activateTest,
  closeTest,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
