import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, {Component} from 'react';

import { addUser } from "./actions/userAppActions";
import './css/userForm.css';

class UserForm extends Component {

    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let userName = this.refs.userName.value.trim();

        if (this.validate(userName)) {
            let { lastUserId } = this.props.stateFromReducer;
            this.props.addUser(userName);

            // Check if new user added
            if (lastUserId < this.props.stateFromReducer.lastUserId) {
                this.refs.userName.value = "";
            }
        }
    }

    validate(name){
        if (name !== '') {
            return true;
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User name:</label><br />
                    <input ref="userName" type="text"/>
                </div>
                <input type="submit" value="Add" />
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addUser: addUser}, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

const UserFormConnected = connect(mapStateToProps, mapDispatchToProps)(UserForm);
export default UserFormConnected;