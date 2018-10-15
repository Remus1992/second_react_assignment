import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
    state = {
        userInput: '',
        userInputLetterList: [],
    };

    inputChangedHandler = (event) => {
        this.setState({userInput: event.target.value})
    };

    inputSplitHandler = (event) =>{
        this.setState.userInputLetterList = this.state.userInput.split();

    };

    render() {
        if (this.state.userInput) {
            letters = (
                <div>
                    <CharComponent
                    changed={this.inputSplitHandler}/>
                </div>
            )
        }
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
