import React,{Component} from 'react';

export default class SubmitForm extends Component {

    render() {
        return (
            <div className="class-name">
                <input type="text" className="form-text-field" placeholder="User Name" />
                <input type="password" className="form-text-field" placeholder="Password" />
                <button className="form-button">Submit</button>
            </div>
        );
    }
}
