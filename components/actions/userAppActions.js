export function addUser(userName) {
    return {
        type: 'ADD_USER',
        userName: userName
    };
}

export function deleteUser(userId) {
    return {
        type: 'DELETE_USER',
        userId: userId
    };
}

export function filter(filterVal) {
    return {
        type: 'FILTER',
        filter: filterVal
    };
}