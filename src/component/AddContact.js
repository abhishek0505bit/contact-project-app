//This is the **CLASS COMPONENT
// this is  the syntax of writing the class component 
// we use a render method in this, we don;t directly return in it




import React from "react";

class AddContact extends React.Component{

    render(){
        return(
            <div className="ui main">
            <h2> Add Contact </h2>
            <div className="ui form">


                <div className="field">
                    <label> Name </label>
                    {/* The name attribute is used to reference form data after a form is submitted. */}
                    <input type="text" name="name" placeholder="Type your name" />
                </div>
    
                <div className="field">
                    <label> Email </label>
                    <input type="text" name="Email" placeholder="Type your Email" />
                </div>

                {/* adding an add button */}
                <button className="ui button black">Add</button>

            </div>
    
            </div>
        )     
    }




}
export default AddContact;