import React from "react";
import { connect } from "react-redux";
import { 
    getUsersByPageNumberAndUsersOnPageFromApiThunkCreator, 
    getUsersByPageNumberAndUsersOnPageFromFoundedUsersThunkCreator, 
    setActualUsersActionCreator, 
    setPageNumberActionCreator 
} from "../../redux/users-reducer";
import Pagination from "./Pagination";


class PaginationClass extends React.Component {


    getPageNumber = (pageNumber) => {
        this.props.setPageNumber(pageNumber)

        if(this.props.foundedUsers.length > 0)
        {
            this.props.getUsersByPageNumberAndUsersOnPageFromFoundedUsers(this.props.foundedUsers, pageNumber, this.props.usersOnPage)
        }
        else
        {
            this.props.getUsersByPageNumberAndUsersOnPageFromApi(pageNumber, this.props.usersOnPage)
        }   
    }

    render() {
   
        return(
            <Pagination 
            themeColor={this.props.themeColor}
            totalPagesCount={this.props.totalPagesCount}
            pageNumber={this.props.pageNumber}

            getPageNumber={this.getPageNumber}
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
        getUsersByPageNumberAndUsersOnPageFromFoundedUsers: (foundedUsers, pageNumber, usersOnPage) => 
            {dispatch(getUsersByPageNumberAndUsersOnPageFromFoundedUsersThunkCreator(foundedUsers, pageNumber, usersOnPage))},
        getUsersByPageNumberAndUsersOnPageFromApi: (pageNumber, usersOnPage) => 
            {dispatch(getUsersByPageNumberAndUsersOnPageFromApiThunkCreator(pageNumber, usersOnPage))}
    }
}

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(PaginationClass);

export default PaginationContainer;