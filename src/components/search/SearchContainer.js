import { connect } from "react-redux";
import Search from "./Search";
import { 
    setActualUsersActionCreator,
    setFoundedUsersActionCreator,
    setPageNumberActionCreator,
    setTotalPagesCountActionCreator,
    updateSearchInputTextActionCreator 
} from "../../redux/users-reducer";
import React from "react";
import { Api } from "../../api/Api";

class SearchClass extends React.Component{
 
    getUsersByName = (userName) => {
        // debugger
        return(
            Api.searchUserByName(userName)
            .then(data => {
                    if(data.length > 0)
                    {
                        this.props.setFoundedUsers(data)
                        this.getActualFoundedUsers(this.props.usersOnPage)
                        this.getTotalPagesCount(data.length, this.props.usersOnPage)
                    }
                   

                    // this.props.setActualUsers(data)
                    

                })
        )
        
    }
    

    getActualFoundedUsers = (usersOnPage ) =>{
        // debugger
        this.props.setPageNumber(1);
        // let pageNumber = this.props.pageNumber
        let foundedUsers = this.props.foundedUsers
        let sortedFoundedUsersByUsersOnPage = [];

        if(usersOnPage > foundedUsers.length)
        {
            usersOnPage = foundedUsers.length

            // for (let index = ((pageNumber * usersOnPage) - usersOnPage) ; index < (pageNumber * usersOnPage) && index < foundedUsers.length ; index++) {
            //     sortedFoundedUsersByUsersOnPage.push(foundedUsers[index]);   
            // }
            for (let index = 0 ; index < usersOnPage; index++) {
                sortedFoundedUsersByUsersOnPage.push(foundedUsers[index]);   
            }
            
        }
        else
        {
            // for (let index = ((pageNumber * usersOnPage) - usersOnPage) ; index < (pageNumber * usersOnPage) && index < foundedUsers.length; index++) {
            //     sortedFoundedUsersByUsersOnPage.push(foundedUsers[index]);   
            // }
            for (let index = 0 ; index < usersOnPage ; index++) {
                sortedFoundedUsersByUsersOnPage.push(foundedUsers[index]);   
            }
        }

        this.props.setActualUsers(sortedFoundedUsersByUsersOnPage)
    }

    getTotalPagesCount = (allUsers, usersOnPage ) => {
    // debugger
        let pages = Math.ceil(allUsers / usersOnPage);
        this.props.setTotalPagesCount(pages);
    }

    render() {
   
        return(
            <Search
            searchInputText={this.props.searchInputText} 

            updateSearchInputText={this.props.updateSearchInputText}  
            getUsersByName={this.getUsersByName}
            />
        ) 
    }


}

let mapStateToProps = (state) => {
 
    return {
        searchInputText: state.usersPage.searchInputText,
        usersOnPage: state.usersPage.usersOnPage,
        pageNumber: state.usersPage.pageNumber,
        foundedUsers: state.usersPage.foundedUsers
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateSearchInputText: (text) => { dispatch(updateSearchInputTextActionCreator(text)) },
        setActualUsers: (data) => {dispatch(setActualUsersActionCreator(data))},
        setFoundedUsers: (data) => {dispatch(setFoundedUsersActionCreator(data))},
        setTotalPagesCount: (pages) => {dispatch(setTotalPagesCountActionCreator(pages))},
        setPageNumber: (pageNumber) => {dispatch(setPageNumberActionCreator(pageNumber))}
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchClass); 

export default SearchContainer;