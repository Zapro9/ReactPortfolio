import React from "react";
import "./Form.css";


const Form = (props) => {
    return (
        <div className="container" style={{width: 45 + "%", marginTop: 200 + "px"}}>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label for="password">What can I do for you?</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            Tell me more about how I can help!
                        <div className="input-field inline">
                                <input id="email_inline" type="email" className="validate" />
                                <label for="email_inline">Further Details</label>
                            </div>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" id="formBtn" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </form>
            </div>
        </div>

    );
}

export default Form;