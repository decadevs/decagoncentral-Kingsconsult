import React from 'react'
import {Card} from "./style"

const App = (props) => {
    return (
    <Card >
      <div className="contents">
        <div className="left" >
      <h4>{props.title}</h4>
      <p>
        {props.description}
      </p>

        </div>
        <div className="right">
<div className="img">
  add image here
</div>
        </div>
      </div>
    </Card>
      );
}
 
export default App; 