const initialState = {
    users: [],
    lastUserId: 1,
    filtredUsers:[],
    filter: ""
};

export default function patentDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER': {
            const { userName } = action;

            // Check if user already exist
            let valid = true; for(let i = 0; i < state.users.length; i++) {
                if(userName === state.users[i].name) {
                    valid = false;
                    break;
                }
            }

            if(valid){
                const users = [...state.users, {name: userName, id: state.lastUserId++}];
                return Object.assign({}, state, {
                    users: users,
                    filtredUsers: getFilteredUsers(users, state.filter)
                });
            } else {
                alert (`User ${userName} already exist`);
                return state;
            }
        }

        case 'DELETE_USER': {
            const { userId } = action;
            const users = [...state.users.filter(user => user.id !== userId)];
            return Object.assign({}, state, {
                users: users,
                filtredUsers: getFilteredUsers(users, state.filter)
            });
        }

        case 'FILTER': {
            const { filter } = action;
            return Object.assign({}, state, {
                filtredUsers: getFilteredUsers(state.users, filter),
                filter: filter
            });
        }
        default: {
            return state;
        }
    }
}

function getFilteredUsers(users, filter) {
    return users.filter(user => user.name.toLowerCase().includes(filter))
}