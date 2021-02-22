import React,{Component} from 'react';
import B from './ComponentB';

class A extends Component {
    constructor(props) {
      super(props);
      this.handleChanges = this.handleChanges.bind(this);
      this.state = {
        input: "let's change the state!"
      }
    }
  
    handleChanges(e) {
      this.setState({
        input: e.target.value
      });
    }
    render() {
      return (
        <div>
          <label>Just type something! </label>
          <input
            value={this.state.input}
            onChange={this.handleChanges}
          />
          <B input={this.state.input} />
        </div>
      );
    }
  }
  
  export default A;
  