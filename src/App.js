import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation'

class App extends Component {
    state = {
        userInput: ''
    };

    inputChangedHandler = ( event ) => {
        this.setState({userInput: event.target.value})
    };

    render() {
        return (
            <div className="App">
                <p>Enter Text</p>
                <input type="text"
                       onChange={this.inputChangedHandler}
                       value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <Validation userInputLength={this.state.userInput.length}/>
            </div>
        );
    }
}

export default App;
