import React from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment';
import Form from 'form';
import Display from 'display';

class App extends React.Component {
    constructor(){
      super()

      this.state = {
        holder1:"",
        todo1 : []
      }
    }

    setTodo(){
        console.log('this.state.ho.der in settodo: ', this.state.holder1)
        console.log('todo1 array inside settodo: ', this.state.todo1)
        console.log('todo array inside settodo: ', this.state.todo)
        console.log('set todo called!! event target value', event.target.value)
        var entry = (this.state.holder1 + "     " + "<Entry date>: " + moment().format())
        this.state.todo1.push(entry);
        var currentState = {
            holder:"",
            todo1:this.state.todo1
        };
        this.setState({currentState});
    }

    setHolder(){
        this.state.holder1 = event.target.value;
        console.log('this is set holder getting info from child: ', this.state.holder1)
    }

    render() {
        console.log('rendering app: ', this.state)
        return (
        <div>
            <Form setTodo = {()=>{ this.setTodo() }} setHolder={()=>{ this.setHolder() }}/>
            <br></br>
            <Display todo={this.state.todo1}/>
        </div>
        );
    }
}

export default hot(module)(App);