import React from "react";
import { connect } from "react-redux";
import { Api } from "../../api/Api";
import { setActualUsersActionCreator, setPageNumberActionCreator } from "../../redux/users-reducer";
import Pagination from "./Pagination";


class PaginationClass extends React.Component {


    getUsersByPageNumber = (pageNumber) => {
        // debugger
        return(
            Api.getUsersByPageNumber(pageNumber, this.props.usersOnPage)
            .then(data => {
                this.props.setActualUsers(data)
            })
        )
    }

    getFoundedUsersByPageNumber = (pageNumber) => {
        // debugger
        let usersOnPage = this.props.usersOnPage
        let foundedUsers = this.props.foundedUsers
        let sortedFoundedUsersByUsersOnPage = [];

        if(usersOnPage > foundedUsers.length)
        {
            usersOnPage = foundedUsers.length

            for (let index = ((pageNumber * usersOnPage) - usersOnPage) ; index < (pageNumber * usersOnPage); index++) {
                sortedFoundedUsersByUsersOnPage.push(foundedUsers[index]);   
            }
            
        }
        else
        {
            for (let index = ((pageNumber * usersOnPage) - usersOnPage) ; index < (pageNumber * usersOnPage) && index < foundedUsers.length; index++) {
                sortedFoundedUsersByUsersOnPage.push(foundedUsers[index]);   
            }
        }
        

        

        this.props.setActualUsers(sortedFoundedUsersByUsersOnPage)

    }
    

    render() {
   
        return(
            <Pagination 
            themeColor={this.props.themeColor}
            totalPagesCount={this.props.totalPagesCount}
            pageNumber={this.props.pageNumber}
            setPageNumber={this.props.setPageNumber}
            foundedUsers={this.props.foundedUsers}
            getUsersByPageNumber={this.getUsersByPageNumber}
            getFoundedUsersByPageNumber={this.getFoundedUsersByPageNumber}
            />
        ) 
    }

}

let mapStateToProps = (state) => {
    return {
        totalPagesCount: state.usersPage.totalPagesCount,
        pageNumber: state.usersPage.pageNumber,
        usersOnPage: state.usersPage.usersOnPage,
        foundedUsers: state.usersPage.foundedUsers,
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        setPageNumber: (pageNumber) => {dispatch(setPageNumberActionCreator(pageNumber))},
        setActualUsers: (data) => {dispatch(setActualUsersActionCreator(data))},
    }
}

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(PaginationClass);

export default PaginationContainer;