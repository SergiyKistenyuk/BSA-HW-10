import { connect } from 'react-redux';
import React, {Component} from 'react'

import User from './user'
import './css/usersList.css'

class UsersList extends Component {

    constructor(){
        super();
    }

    render() {
        let { filtredUsers } = this.props.stateFromReducer;

        return (
            (filtredUsers.length > 0) ? <ul>
                { filtredUsers.map( (user, index) => {
                    return <li key={user.id}><User id={user.id} name={user.name}></User></li>
                })}
            </ul> : null
        );
    }
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

const UsersListConnected = connect(mapStateToProps)(UsersList);
export default UsersListConnected;
