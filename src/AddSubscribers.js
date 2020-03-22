import React, { Component } from 'react';
import Header from './Header';
import './AddSubscribers.css';
import {Link} from 'react-router-dom';
class AddSubscribers extends Component{
    constructor()
    {
        super();
        this.state={
            id: 0,
            name: '',
            phone: ''
        }
    }
    inputChangedHandler = (e) => {
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
        
    }

    inputChangedHandler1 = (e) => {
        const state=this.state;
        state[e.target.phone]=e.target.value;
        this.setState(state);
        console.log(this.state.phone);
    }

    onFormSubmitted=(e)=>{
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id:0, name:'', phone:''});
        this.props.history.push("/");
        console.log(this.state.name+" "+this.state.phone);
    }
    render(){
        const {name,phone}=this.state;
        return(
            <div>
<Header heading="Add Subscriber"/>
<div className="component-body-container">
 <Link to="/">   <button className="custom-btn">Back</button></Link>
    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
        <label htmlFor="name" className="label-control">Name</label><br/>
        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}/><br/><br/>
        <label htmlFor="phone" className="label-control">phone</label><br/>
        <input id="phone" type="text" className="input-control" name="phone"  onChange={this.inputChangedHandler}/><br/><br/>
        <div className="subscriber-info-container">
            <span className="subscriber-to-add-heading">Subscriber to be added</span><br/>
        <span className="subscriber-info">Name: {name}</span><br/>
        <span className="subscriber-info">phone: {phone}</span><br/>
        </div>
        <button type="submit" className="custom-btn add-btn">Add</button>
    </form>
</div>
            </div>
        )
    }
}
export default AddSubscribers;