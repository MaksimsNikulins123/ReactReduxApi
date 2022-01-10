import { connect } from "react-redux";
import Search from "./Search";
import { 
    searchUsersByNameThunkCreator,
    updateSearchInputTextActionCreator 
} from "../../redux/users-reducer";
import React from "react";

class SearchClass extends React.Component{
 
    getUsersByName = (userName) => {
        this.props.searchUsersByName(userName, this.props.usersOnPage, this.props.foundedUsers)
    }

    getSearchInputText = (text) => {
        this.props.updateSearchInputText(text)
    }
  
    render() {
   
        return(
            <Search
            searchInputText={this.props.searchInputText}

            getSearchInputText={this.getSearchInputText}
            getUsersByName={this.getUsersByName}
            />
        ) 
    }
}

let mapStateToProps = (state) => {
 
    return {
        searchInputText: state.usersPage.searchInputText,
        usersOnPage: state.usersPage.usersOnPage,
        foundedUsers: state.usersPage.foundedUsers
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateSearchInputText: (text) => { dispatch(updateSearchInputTextActionCreator(text)) },
        searchUsersByName: (userName, usersOnPage, foundedUsers) => {dispatch(searchUsersByNameThunkCreator(userName, usersOnPage, foundedUsers))}
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchClass); 

export default SearchContainer;