import React from "react";
import { connect } from "react-redux";
import { 
    setActualUsersActionCreator,
    setAllUsersActionCreator, 
    setTotalPagesCountActionCreator, 
    setUserNameByIdActionCreator 
} from "../../redux/users-reducer";
import Users from './Users';
import {Api} from "../../api/Api";

class UsersClass extends React.Component {

    componentDidMount() {
        // debugger
            Api.getAllUsers()
            .then(data => {
                    this.props.setAllUsers(data)
                    this.getTotalPagesCount(data.length, this.props.usersOnPage)
                })

            Api.getUsersByPageNumber(this.props.pageNumber, this.props.usersOnPage)
                .then(data => {
                this.props.setActualUsers(data)
            }) 
    }
   
    
    getTotalPagesCount = (allUsers, usersOnPage ) => {

        let pages = Math.ceil(allUsers / usersOnPage);
        this.props.setTotalPagesCount(pages);
    }

    getUserNameById = (id) => {
        return(
            Api.getUser(id)
            .then(data => {
                    this.props.setUserNameById(data.name)
                })
        )
        
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
        pageNumber: state.usersPage.pageNumber

    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        setAllUsers: (allUsers) => {dispatch(setAllUsersActionCreator(allUsers))},
        setTotalPagesCount: (pages) => {dispatch(setTotalPagesCountActionCreator(pages))},
        setUserNameById: (name) => {dispatch(setUserNameByIdActionCreator(name))},
        setActualUsers: (data) => {dispatch(setActualUsersActionCreator(data))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;