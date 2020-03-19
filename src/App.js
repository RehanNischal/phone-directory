import React, {
  Component
} from 'react';

import Header from "./Header";
import "./App.css";

class App extends Component {
  deleteHandler(msg){
    alert(msg);
  }
  constructor()
  {
    super();
    this.state={
      subscriberListToShow:  [ ]
      
    }
  }
  render() {
    // let subscribers=[
    //   {
    //     id:1,name:"rehan",phone:"9996305732"
    //   },
    //   {
    //    id:2, name:"harshit",phone:"8572829003"
    //   }
    // ]
        return(
          <div className="component-container">
           <Header heading="phone-directory"/>


          <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>

            <div className="grid-container heading-container">
              <span className="grid-item name-heading">Name</span>
              <span className="grid-item phone-heading">Phone</span>
            </div>
        
{
  this.state.subscriberListToShow.map(sub=>{
    return <div key={sub.id} className="grid-container">
      <span className="grid-item">{sub.name}</span>
      <span className="grid-item">{sub.phone}</span>
      <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this,"delelteclicked")}>Delete</button>
                </span>
      </div>
  })
}


          </div>
          
        
          </div>
        

        
        );
  

}
}

export default App;