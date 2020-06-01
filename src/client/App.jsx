import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(){
      super()

      this.state = {
        holder:"",
        todo : []
      }
    }
    clickHandler(){
        console.log('yay this button is working!')
        var entry = this.state.holder
        this.state.todo.push(entry);
        console.log('todo array: ', this.state.todo)
        var currentState = {
            holder:"",
            todo:this.state.todo
        }
        this.setState(currentState);
    }

    changeHandler(event){
      console.log("change", event.target.value);
      this.state.holder = event.target.value
      console.log("this.state.holder", this.state.holder)
    }

    // }

    render() {
        console.log('rendering side, todo array: ', this.state.todo)
        const todoMapper = this.state.todo.map((todo, index)=>{
            return(
                <div>
                    {(index + 1)}. {todo}
                </div>
                )
        })
        return (
        <div>
            <input onChange={(event)=>{this.changeHandler(event);}}/>
            <button onClick={()=>{this.clickHandler()}}>click me!</button>
            <br></br>
            <br></br>
            <h3>Below is your todo!</h3>
            {todoMapper}
        </div>
        );
    }
}

export default hot(module)(App);