import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, {Component} from 'react'

import { deleteUser } from "./actions/userAppActions";

class User extends Component {

    constructor() {
        super();

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        this.props.deleteUser(this.props.id);
    }

    render() {
        return (
            <div>
                <span>{this.props.id}. {this.props.name}</span>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteUser: deleteUser}, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}

const UserConnected = connect(mapStateToProps, mapDispatchToProps)(User);
export default UserConnected;
