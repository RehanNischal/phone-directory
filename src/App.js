import React, { Component } from 'react';

import Header from "./Header";

class App extends Component {
  render(){
    let x=1;
    let y=9;
  return (
    <div >
      <Header/>
      <button>Add</button>  
      <div>
        <span>Name</span><br/>
        <span>Phone</span>
      </div>
    
                              {/* <label htmlFor="Name">Name: </label>
                                <input type="text" id="Name" placeholder="Type your name here" defaultValue={x+y}></input> */}

                            
</div>
);
      
  


       }
}

export default App;
