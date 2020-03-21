import React, { Component } from 'react';
import AddSubscribers from './AddSubscribers';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component{
    constructor(){
        super();
       this.state={
           subscribersList: [
               {
                   id: 1,name: 'Rehan',Phone: 9996305732
               },
               {
                id: 2,name: 'Harshit',Phone: 8572829003
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
//<AddSubscribers addSubscriberHandler={this.addSubscriberHandler}/>
<ShowSubscribers subscribersList={this.state.subscribersList}/>
        )
    }
}
export default PhoneDirectory;