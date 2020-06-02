import React from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment';

class Display extends React.Component {
    constructor(){
      super()

      this.state = {
        x:""
      };
    }

    // }

    render() {
        console.log('display props todo', this.props.todox)
        const todoMapper = this.props.todo.map((todo, index)=>{
            return(
                <div>
                    {(index + 1)}. {todo}
                </div>)
        })
        return (
        <div>
            <h1>Hello this your Todo list!</h1>
            <p>{todoMapper}</p>
        </div>
        );
    }
}

export default hot(module)(Display);