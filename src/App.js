import React, {Component} from 'react';

const Header = () => (
  <div className="header grid">
    <h1 className="title">Jiffy</h1>
  </div>
)

class App extends Component {

  // with create-react-app we can write out methods
  // as arrow functions, meaning we don't need the constructor and bind
  handleChange = event => {

    const {value} = event.target
    if (value.length > 2) {

    }
  }

  handleKeyPress = event => {
    const {value} = event.target

    if (value.length > 2 && event.key === 'Enter') {
      alert(`search for ${value}`)
    }
  }

  // when we have two or more characters in our search box
  // and we have also pressed enter, we then want to run a search

  render() {
    return (
      <div className="page">
          <Header />
          <div className="search grid">
            {/* our stack of gif images */}
            <input className="input grid-item" placeholder="Type something" 
            onChange={this.handleChange} 
            onKeyPress={this.handleKeyPress}
            />
          </div>
      </div>
    );
  }
}

export default App;
