import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, {Component} from 'react'

import * as actions from "./actions/userAppActions";
import UserForm from './userForm'
import UsersList from './usersList'
import './css/userApp.css'

class UserApp extends Component {

    constructor(){
        super();

        this.handlefilter = this.handlefilter.bind(this);
    }

    handlefilter(){
        this.props.filter(this.refs.search.value.toLowerCase());
    }

    render() {
        return (
        <div className="block">
            <UserForm/>
            <label>Search:</label>
            <input ref="search" type="text" onChange={this.handlefilter}/>
            <UsersList/>
        </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

const UserAppConnected = connect(mapStateToProps, mapDispatchToProps)(UserApp);
export default UserAppConnected;
