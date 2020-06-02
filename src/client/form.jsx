import React from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment';

class Form extends React.Component {
    constructor(){
      super()

      this.state = {
        holder:"",
        todo : []
      }
    }
    clickHandler(){
        console.log('yay this button is working!')
        console.log('this is the part for checking this.state.holder', this.state.holder)
        var entry = (this.state.holder + "Entry date: " + moment().format())
        this.state.todo.push(entry);
        console.log('this is the part for checking this.state.todo', this.state.todo);
        var currentState = {
            holder:"",
            todo:this.state.todo
        }
        this.setState({currentState})
        // var entry = (this.state.holder + "Entry date: " + moment().format())
        // this.state.todo.push(entry);
        // console.log('todo array: ', this.state.todo)
        // var currentState = {
        //     holder:"",
        //     todo:this.state.todo
        // }
        this.props.setTodo();
        var inputGetter = document.getElementById('input')
        inputGetter.value ="";
        console.log(moment().format());
    }

    changeHandler(event){
      console.log("change", event.target.value);
      this.state.holder = event.target.value
      console.log("this.state.holder in form", this.state.holder)
      this.props.setHolder();
    }

    // }

    render() {
        console.log('rendering side, todo array: ', this.state.todo)
        return (
        <div>
            <input onChange={(event)=>{this.changeHandler(event);}} id='input'/>
            <button onClick={()=>{this.clickHandler()}}>click me!</button>
            <br></br>
            <br></br>
        </div>
        );
    }
}

export default hot(module)(Form);