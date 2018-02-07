import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      value: 0
    }
    this.add1 = this.add1.bind(this);
    this.add2 = this.add2.bind(this);
    this.add3 = this.add3.bind(this);
  }
  add1(){
    this.setState({count: this.state.count + 1});
  }
  add2(){
    this.setState({count: this.state.count + 2});
  }
  add3(){
    this.setState({count: this.state.count + 3});
  }
  valueChange(e){
    this.setState({value: +e.target.value});
  }
  render() {
    return (
      <div>
        <input type="number" value={this.state.count}/>
        <br/>
        <button value="1" onClick={this.add1}>1</button>
        <button value="2" onClick={this.add2}>2</button>
        <button value="3" onClick={this.add3}>3</button>
        <br/>
        <button onClick={() => this.setState({count: 0})}>RESET</button>
      </div>
    );
  }
}

export default App;
