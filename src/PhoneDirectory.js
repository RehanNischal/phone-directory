import React, { Component } from 'react';
import AddSubscribers from './AddSubscribers';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';
class PhoneDirectory extends Component{
    constructor(){
        super();
       this.state={
           subscribersList: [
               {
                   id: 1,name: 'Rehan',phone: '9996305732'
               },
               {
                id: 2,name: 'Harshit',phone: '8572829003'
                }
           ]
       }
    }
    addSubscriberHandler=(newSubscriber) =>{
        let subscribersList=this.state.subscribersList;
        if(subscribersList.length>0){
            newSubscriber.id=subscribersList[subscribersList.length-1].id+1;
        }
        else{
            newSubscriber.id=1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList:subscribersList});
        console.log("Phone Directory");
        console.log(this.state.subscribersList);
    }
    render(){
        return(
        // <AddSubscribers addSubscriberHandler={this.addSubscriberHandler}/>
   <Router>
       <div className="main-container">
       <Route exact path='/' render={(props)=> <ShowSubscribers {...props} subscribersList = {this.state.subscribersList} />} />
       <Route exact path='/addSubscribers' render={({history},props)=> <AddSubscribers history={history}{...props} addSubscriberHandler = {this.addSubscriberHandler} />} />
       </div>
   </Router> 
        )
    }
}
export default PhoneDirectory;