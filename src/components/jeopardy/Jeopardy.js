import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {category: {}},
      score: 0,
      answer: ""
    }
  }

  handleChange = (event) => {
    let answer = event.target.value;

    this.setState({ answer })
  }
  
  handleClick = (event) => {

    if(this.state.answer === this.state.data.answer) {
      this.setState ((state)=>({
        score: state.score + this.state.data.value
      }))
    } else {
      this.setState((state)=>({
        score: state.score - this.state.data.value
      }))
    }

    this.getNewQuestion()
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    return (
      <div>
        <strong>Question: </strong> {this.state.data.question} <br/>
        <strong>Value: </strong> {this.state.data.value} <br/>
        <strong>Category: </strong> {this.state.data.category.title} <br/>
        <strong>Score: </strong> {this.state.score} <br/>
        <input type=
        "text"
        value={this.state.answer} 
        onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Submit</button>
       </div>    
    );
  }
}
export default Jeopardy;