import React from "react";
import { connect } from "react-redux";
import { 
    getAllUsersThunkCreator,
    getUserByIdThunkCreator,
    getUsersByPageNumberAndUsersOnPageFromApiThunkCreator,
} from "../../redux/users-reducer";
import Users from './Users';

class UsersClass extends React.Component {
 
    componentDidMount() {
        this.props.getAllUsers(this.props.usersOnPage)
        this.props.getUsersByPageNumberAndUsersOnPageFromApi(this.props.pageNumber, this.props.usersOnPage)
    }

    getUserNameById = (userId) => {
        this.props.getUserById(userId)       
    }
    

    render() {
       
        return(
            <Users 
            actualUsers={this.props.actualUsers}

            getUserNameById={this.getUserNameById}     
            />
        ) 
    }

}

let mapStateToProps = (state) => {
    return {
        actualUsers: state.usersPage.actualUsers,
        usersOnPage: state.usersPage.usersOnPage,
        pageNumber: state.usersPage.pageNumber,
        // allUsers: state.usersPage.allUsers

    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: (usersOnPage) => {dispatch(getAllUsersThunkCreator(usersOnPage))},
        getUsersByPageNumberAndUsersOnPageFromApi: (pageNumber, usersOnPage) => {dispatch(getUsersByPageNumberAndUsersOnPageFromApiThunkCreator(pageNumber, usersOnPage))},
        getUserById: (userId) => {dispatch(getUserByIdThunkCreator(userId))}
    
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;